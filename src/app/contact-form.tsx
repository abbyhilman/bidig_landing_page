"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState } from 'react';
import { Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(`Ini response ${response.status}`);

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
        console.log(data.message);
      } else {
        console.log(`Ini response ${response.status}`);
        console.error('Error sending email 1');
        setMessage('Error sending email 1');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email 2', error);
      setMessage('Error sending email 2');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }
  };
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and our Team will get back to you within 24
                hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +62 859 7789 8907
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  bidigcorp@gmail.com
                </Typography>
              </div>
              {/* <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Open Support Ticket
                </Typography>
              </div> */}
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Name"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="eg. Lucas Hanabi"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {/* @ts-ignore */}
                  {/* <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Jones"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  /> */}
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="eg. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                  value={formData.email} onChange={handleChange} required
                />
                {/* <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested on?
                </Typography> */}
                {/* <div className="-ml-3 mb-14 "> */}
                {/* @ts-ignore */}
                {/* <Radio
                    color="gray"
                    name="type"
                    label="Design"
                    defaultChecked
                  /> */}
                {/* @ts-ignore */}
                {/* <Radio color="gray" name="type" label="Development" /> */}
                {/* @ts-ignore */}
                {/* <Radio color="gray" name="type" label="Support" /> */}
                {/* @ts-ignore */}
                {/* <Radio color="gray" name="type" label="Other" /> */}
                {/* </div> */}
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  id="message"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                  value={formData.message} onChange={handleChange} required
                />
                <div className="w-full flex justify-end">
                  <Button type="submit" className="w-full md:w-fit" color="gray" size="md" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Send Email'}
                  </Button>
                </div>
              </form>
              {message && <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                  <HiExclamation className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">{message}</div>
                <Toast.Toggle />
              </Toast>}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
