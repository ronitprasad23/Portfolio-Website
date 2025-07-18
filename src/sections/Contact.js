import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaCheckCircle, FaPhoneAlt, FaUser } from 'react-icons/fa';

const gradient = 'linear-gradient(135deg, #0a1931 0%, #64ffda 100%)';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactSection = styled.section`
  background: #f5f7fa;
  background-image: ${gradient};
  background-size: cover;
  padding: 80px 0 40px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 700;
`;
const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  align-items: flex-start;
  animation: ${fadeIn} 1s ease;
`;
const InfoCard = styled.div`
  flex: 1 1 320px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(10,25,49,0.10);
  padding: 2.5rem 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 280px;
  gap: 1.2rem;
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: #0a1931;
  font-weight: 500;
`;
const Status = styled.div`
  color: #27ae60;
  font-weight: 700;
  margin-top: 1rem;
  font-size: 1.1rem;
`;
const FormCard = styled.form`
  flex: 2 1 400px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(10,25,49,0.10);
  padding: 2.5rem 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 320px;
  animation: ${fadeIn} 1.2s ease;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #f5f7fa;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: 1.5px solid #e6ecf8;
  &:focus-within {
    border-color: #64ffda;
  }
`;
const InputIcon = styled.div`
  color: #0a1931;
  font-size: 1.1rem;
  margin-right: 0.7rem;
`;
const Input = styled.input`
  border: none;
  background: transparent;
  font-size: 1rem;
  outline: none;
  width: 100%;
  padding: 0.7rem 0;
`;
const Textarea = styled.textarea`
  border: none;
  background: transparent;
  font-size: 1rem;
  outline: none;
  width: 100%;
  min-height: 100px;
  padding: 0.7rem 0;
  resize: vertical;
`;
const Button = styled.button`
  background: #0a1931;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 0.85rem 2.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  align-self: flex-end;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  &:hover {
    background: #64ffda;
    color: #0a1931;
    transform: translateY(-2px) scale(1.03);
  }
`;
const Error = styled.div`
  color: #e74c3c;
  font-size: 0.98rem;
  margin-bottom: -0.5rem;
`;
const Success = styled.div`
  color: #27ae60;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name is required.';
    if (!form.email) errs.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email address.';
    if (!form.subject) errs.subject = 'Subject is required.';
    if (!form.message) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Contact Me</Title>
        <ContactRow>
          <InfoCard>
            <InfoItem><FaUser /> Ronit Prasad</InfoItem>
            <InfoItem><FaEnvelope /> ronitprasad127@gmail.com</InfoItem>
            <InfoItem><FaPhoneAlt /> +91 7631-*******</InfoItem>
            <InfoItem><FaMapMarkerAlt /> Ahmedabad, India</InfoItem>
            <Status>Available for internships & projects</Status>
          </InfoCard>
          <FormCard onSubmit={handleSubmit} noValidate>
            <InputGroup>
              <InputIcon><FaUser /></InputIcon>
              <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} aria-label="Name" />
            </InputGroup>
            {errors.name && <Error>{errors.name}</Error>}
            <InputGroup>
              <InputIcon><FaEnvelope /></InputIcon>
              <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} aria-label="Email" />
            </InputGroup>
            {errors.email && <Error>{errors.email}</Error>}
            <InputGroup>
              <InputIcon><FaEnvelope /></InputIcon>
              <Input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} aria-label="Subject" />
            </InputGroup>
            {errors.subject && <Error>{errors.subject}</Error>}
            <InputGroup>
              <InputIcon><FaEnvelope /></InputIcon>
              <Textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} aria-label="Message" />
            </InputGroup>
            {errors.message && <Error>{errors.message}</Error>}
            <Button type="submit">Send Message</Button>
            {submitted && <Success><FaCheckCircle /> Message sent successfully!</Success>}
          </FormCard>
        </ContactRow>
      </Container>
    </ContactSection>
  );
};

export default Contact; 