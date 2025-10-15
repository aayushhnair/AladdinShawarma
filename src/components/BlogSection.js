import React, { useRef } from 'react';
import strings from '../config/strings.json';
import { getImageByKey } from '../config/assets';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BlogSection = () => {
  const sectionRef = useRef(null);
  
  // Apply advanced scroll animations to all elements
  useScrollAnimation(sectionRef, 'fade-in', 0.1);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="section-column" id="blog" ref={sectionRef} style={{ color: '#08144F' }}>
      {/* Section Header */}
      <div className="section-header animate-on-scroll dissolve" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="section-badge animate-on-scroll flip-in delay-200" style={{ 
          background: 'rgba(252, 177, 0, 0.15)', 
          color: '#FCB100',
          border: '1px solid rgba(252, 177, 0, 0.3)',
          display: 'inline-block',
          padding: '0.4rem 1rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {strings.blog.subtitle}
        </div>
        <h2 className="section-title animate-on-scroll zoom-in delay-300" style={{ color: '#08144F' }}>
          {strings.blog.title}
        </h2>
      </div>

      {/* Featured Blog Post */}
      <div className="animate-on-scroll slide-in-diagonal delay-400" style={{ marginBottom: 'var(--space-8)' }}>
        {strings.blog.posts.filter(post => post.featured).map((featuredPost, index) => (
          <div key={index} style={{
            background: '#FFFFFF',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(252, 177, 0, 0.2)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 8px 30px rgba(8, 20, 79, 0.1)'
          }}>
            {/* Featured Badge */}
            <div style={{
              position: 'absolute',
              top: 'var(--space-4)',
              left: 'var(--space-4)',
              background: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              padding: 'var(--space-2) var(--space-4)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-sm)',
              fontWeight: '600',
              zIndex: 2
            }}>
              Featured
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
              {/* Blog Image */}
              <div style={{
                height: '300px',
                backgroundImage: `url('${featuredPost.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(8, 20, 79, 0.3), rgba(252, 177, 0, 0.1))'
                }}></div>
              </div>

              {/* Blog Content */}
              <div style={{ padding: 'var(--space-8)' }}>
                {/* Category */}
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(252, 177, 0, 0.2)',
                  color: 'var(--color-secondary)',
                  padding: 'var(--space-1) var(--space-3)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  marginBottom: 'var(--space-4)'
                }}>
                  {featuredPost.category}
                </div>

                <h3 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: '700',
                  color: 'var(--color-secondary)',
                  marginBottom: 'var(--space-4)',
                  lineHeight: '1.3',
                  fontFamily: 'var(--font-secondary)'
                }}>
                  {featuredPost.title}
                </h3>

                <p style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: 'var(--space-6)'
                }}>
                  {featuredPost.excerpt}
                </p>

                {/* Meta Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-6)',
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  <span>📅 {formatDate(featuredPost.date)}</span>
                  <span>👤 {featuredPost.author}</span>
                  <span>⏱️ {featuredPost.readTime}</span>
                </div>

                {/* Read More Button */}
                <button style={{
                  background: 'var(--color-secondary)',
                  color: 'var(--color-primary)',
                  border: 'none',
                  padding: 'var(--space-3) var(--space-6)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(252, 177, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
                >
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Posts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
        {strings.blog.posts.filter(post => !post.featured).map((post, index) => (
          <div key={index} className={`animate-on-scroll ${index % 2 === 0 ? 'rotate-in' : 'flip-in'} delay-${index + 1}`}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'var(--transition-normal)',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(252, 177, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              {/* Blog Image */}
              <div style={{
                height: '200px',
                backgroundImage: `url('${post.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent, rgba(8, 20, 79, 0.3))'
                }}></div>
                
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-3)',
                  left: 'var(--space-3)',
                  background: 'var(--color-secondary)',
                  color: 'var(--color-primary)',
                  padding: 'var(--space-1) var(--space-3)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: '600'
                }}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 'var(--space-6)' }}>
                <h4 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: '700',
                  color: 'var(--color-secondary)',
                  marginBottom: 'var(--space-3)',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h4>

                <p style={{
                  fontSize: 'var(--text-sm)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: 'var(--space-4)'
                }}>
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: 'var(--text-xs)',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Posts Button */}
      {/* <div className="text-center animate-on-scroll bounce-in delay-5" style={{ marginTop: 'var(--space-8)' }}>
        <button style={{
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          border: '2px solid var(--color-secondary)',
          padding: 'var(--space-4) var(--space-8)',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--text-base)',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'var(--transition-normal)',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--color-secondary)';
          e.target.style.color = 'var(--color-primary)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
          e.target.style.color = 'white';
          e.target.style.transform = 'translateY(0)';
        }}
        >
          View All Blog Posts
        </button>
      </div> */}
    </div>
  );
};

export default BlogSection;
