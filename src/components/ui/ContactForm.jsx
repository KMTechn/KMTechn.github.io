import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  position: relative;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--accent-amber);
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--accent-amber);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: var(--accent-amber);
  color: #121212;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--accent-amber);
  align-self: flex-start;

  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--accent-amber);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled(motion.div)`
  background-color: var(--card-bg);
  border: 1px solid var(--accent-green);
  color: var(--accent-green);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    console.log("Form Submitted:", formData);

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <StatusMessage
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <StatusTitle>
            <CheckCircle size={28} /> {t('contact_form_success_title')}
          </StatusTitle>
          <p>{t('contact_form_success_desc')}</p>
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
