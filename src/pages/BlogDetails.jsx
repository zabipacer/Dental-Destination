import React from 'react';
import { useParams } from 'react-router-dom';
import { blogContents } from './BlogContents';
import parse, { domToReact } from 'html-react-parser';

export default function BlogPost() {
  const { id } = useParams();
  const content = blogContents[id];

  const styles = {
    container: { maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' },
    h1: { fontSize: '2.5rem', fontWeight: 700, margin: '1.5rem 0 1rem' },
    h2: { fontSize: '2rem', fontWeight: 600, margin: '2rem 0 1rem' },
    h3: { fontSize: '1.5rem', fontWeight: 600, margin: '1.5rem 0 0.75rem' },
    p: { fontSize: '1.125rem', lineHeight: 1.8, margin: '1rem 0', color: '#333' },
    ul: { paddingLeft: '1.5rem', margin: '1rem 0' },
    ol: { paddingLeft: '1.5rem', margin: '1rem 0' },
    li: { marginBottom: '0.5rem' },
    table: { width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' },
    th: { border: '1px solid #ddd', padding: '0.75rem', backgroundColor: '#f4f4f4', textAlign: 'left' },
    td: { border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' },
    img: { maxWidth: '100%', height: 'auto', borderRadius: '8px', margin: '1rem 0' },
    a: { color: '#1e90ff', textDecoration: 'underline' },
    blockquote: { borderLeft: '4px solid #ccc', paddingLeft: '1rem', color: '#555', fontStyle: 'italic', margin: '1rem 0' },
    details: { backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '6px', margin: '1rem 0' },
    summary: { fontWeight: 700, cursor: 'pointer', padding: '0.5rem', backgroundColor: '#e0e0e0', borderRadius: '4px' },
    faqItem: { marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden' },
    faqQuestion: { backgroundColor: '#f1f5f9', padding: '0.75rem 1rem', fontWeight: 600, cursor: 'pointer' },
    faqAnswer: { padding: '0.75rem 1rem', backgroundColor: '#fff' }
  };

  if (!content) {
    return <p style={styles.p}>Sorry, blog not found.</p>;
  }

  // If content is a full HTML page or includes its own styles, render raw HTML
  const rawHtmlPattern = /<!DOCTYPE html>|<html|<head|<style/i;
  if (rawHtmlPattern.test(content)) {
    return (
      <article style={styles.container} dangerouslySetInnerHTML={{ __html: content }} />
    );
  }

  const options = {
    replace: (domNode) => {
      if (domNode.type !== 'tag') return;
      const { name, attribs, children, startIndex } = domNode;

      if (name === 'div' && attribs.class === 'faq-section') {
        return (
          <div key={startIndex} style={styles.details}>
            {domToReact(children, options)}
          </div>
        );
      }

      if (name === 'div' && attribs.class === 'faq-item') {
        const questionEl = children.find(
          c => c.type === 'tag' && c.attribs && c.attribs.class === 'faq-question'
        );
        const answerEls = children.filter(
          c => !(c.type === 'tag' && c.attribs && c.attribs.class === 'faq-question')
        );

        return (
          <div key={startIndex} style={styles.faqItem}>
            {questionEl && (
              <div style={styles.faqQuestion} key={questionEl.startIndex}>
                {domToReact(questionEl.children, options)}
              </div>
            )}
            {answerEls.map(node => (
              <div style={styles.faqAnswer} key={node.startIndex}>
                {node.type === 'text' ? node.data : domToReact(node.children, options)}
              </div>
            ))}
          </div>
        );
      }

      if (styles[name]) {
        return React.createElement(
          name,
          { style: styles[name], key: startIndex },
          domToReact(children, options)
        );
      }
    }
  };

  return (
    <article style={styles.container}>
      {parse(content, options)}
    </article>
  );
}
