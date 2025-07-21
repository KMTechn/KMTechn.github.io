import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageContainer, Title } from '../components/ui/Page';

const FormContainer = styled(motion.form)`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
`;

const Input = styled.input`
  background: var(--titanium-light);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--accent-amber);
  }
`;

const TextArea = styled.textarea`
  background: var(--titanium-light);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.3s ease;
  min-height: 150px;
  resize: vertical;

  &:focus {
    border-color: var(--accent-amber);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: 1px solid var(--accent-amber);
  border-radius: 8px;
  background-color: var(--accent-amber);
  color: var(--titanium-dark);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${props => (props.disabled ? 'var(--accent-amber)' : 'transparent')};
    color: ${props => (props.disabled ? 'var(--titanium-dark)' : 'var(--accent-amber)')};
  }
`;

const StatusMessage = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: ${props => (props.type === 'success' ? 'var(--accent-amber)' : '#ff4d4d')};
`;

const ContactPage = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate a successful submission
    setStatus({ type: 'success', message: 'Thank you for your message! We will get back to you shortly.' });
    e.target.reset();
    setIsSubmitting(false);
  };

  return (
    <PageContainer>
      <Title>Contact Us</Title>
      <FormContainer
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Input name="name" type="text" placeholder="Your Name" required />
        <Input name="email" type="email" placeholder="Your Email" required />
        <Input name="subject" type="text" placeholder="Subject" required />
        <TextArea name="message" placeholder="Your Message" required />
        <SubmitButton
          type="submit"
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
        {status && <StatusMessage type={status.type}>{status.message}</StatusMessage>}
      </FormContainer>
    </PageContainer>
  );
};

export default ContactPage;
