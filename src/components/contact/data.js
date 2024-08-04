export const paragraphs = [
  {
    style: "self-start text-[14px] leading-5 mb-6 px-[1%]",
    content: `We value your feedback and thank you for taking the time to share your thoughts about the new site. To contact us by email please fill in the required fields below.`,
  },
  {
    style: "text-left text-[14px] leading-5 mb-6 px-[1%]",
    content: `For specific questions or concerns you may also call us at 1 888 45 VICHY (1 888 458 4249) Mon-Thu, 9am-5pm EST, except holidays. * Please note that due to an increase in contact volume due to COVID-19, we are experiencing delays in handling customer inquiries. We appreciate your patience as we work towards regular turnaround times. *`,
  },
  {
    style: "text-left text-[14px] leading-5 mb-6 px-[1%]",
    content: `For Canadian customers only: at L’Oreal, we care about your privacy. If you have questions or concerns about how we use your information, you may review our privacy policy here. Non Canadian -consumers outside should visit the country website serving their region.`,
  },
];

export const selectOptions = [
  {
    id: 1,
    label: "Online orders",
  },
  {
    id: 2,
    label: "Product Questions",
  },
  {
    id: 3,
    label: "Ingredient Questions",
  },
  {
    id: 4,
    label: "My Account",
  },
  {
    id: 5,
    label: "Website Feedback",
  },
  {
    id: 6,
    label: "General Inquiries",
  },
  {
    id: 7,
    label: "International Inquiries",
  },
];
export const inputs = [
  {
    name: "first_name",
    displayName: "First name",
    type: "text",
    required: true,
  },
  {
    name: "last_name",
    displayName: "Last name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    displayName: "Email address",
    type: "email",
    required: true,
  },
  {
    name: "phone",
    displayName: "Phone",
    type: "text",
    required: true,
  },
  {
    name: "subject",
    displayName: "Subject",
    type: "select",
    required: true,
  },
  {
    name: "message",
    displayName: "Your message",
    type: "textarea",
    required: true,
  },
];
