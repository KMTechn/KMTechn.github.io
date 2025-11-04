import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-top: var(--space-8);
  position: relative;
`;

const Input = styled.input`
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-base);
  transition: border-color 0.3s, box-shadow 0.3s;
  font-family: inherit;

  &:hover:not(:disabled) {
    border-color: var(--accent-amber);
  }

  &:focus {
    outline: 2px solid var(--accent-amber);
    outline-offset: 2px;
    border-color: var(--accent-amber);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Textarea = styled.textarea`
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-base);
  line-height: var(--line-height-relaxed);
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;
  font-family: inherit;

  &:hover:not(:disabled) {
    border-color: var(--accent-amber);
  }

  &:focus {
    outline: 2px solid var(--accent-amber);
    outline-offset: 2px;
    border-color: var(--accent-amber);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  background-color: var(--accent-amber);
  color: #121212;
  font-size: var(--font-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--accent-amber);
  align-self: flex-start;
  font-family: inherit;

  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--accent-amber);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid var(--accent-amber);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled(motion.div)`
  background-color: var(--card-bg);
  border: 1px solid ${props => props.status === 'success' ? '#10b981' : '#ef4444'};
  color: ${props => props.status === 'success' ? '#10b981' : '#ef4444'};
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
`;

const StatusTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error('EmailJS credentials not configured');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Send email
    emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }).then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset form after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }).catch((error) => {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    });
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' || status === 'error' ? (
        <StatusMessage
          key="status"
          status={status}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <StatusTitle>
            {status === 'success' ? (
              <>
                <CheckCircle size={28} /> {t('contact_form_success_title')}
              </>
            ) : (
              <>
                <AlertCircle size={28} /> {t('contact_form_error_title') || 'Error'}
              </>
            )}
          </StatusTitle>
          <p>{status === 'success' ? t('contact_form_success_desc') : t('contact_form_error_desc') || 'Failed to send message'}</p>
        </StatusMessage>
      ) : (
        <FormContainer 
          key="form"
          onSubmit={handleSubmit} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Input type="text" name="name" placeholder={t('contact_form_name')} value={formData.name} onChange={handleChange} required disabled={status === 'submitting'} />
          <Input type="email" name="email" placeholder={t('contact_form_email')} value={formData.email} onChange={handleChange} required disabled={status === 'submitting'} />
          <Textarea name="message" placeholder={t('contact_form_message')} value={formData.message} onChange={handleChange} required disabled={status === 'submitting'} />
          <SubmitButton type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? t('contact_form_submitting') : t('contact_form_submit')}
          </SubmitButton>
        </FormContainer>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
