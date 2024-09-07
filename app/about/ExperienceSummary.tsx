import React, { Children } from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ReactNode } from "react"

const AccordionItem = React.forwardRef<typeof Accordion.Item, React.PropsWithChildren<Accordion.AccordionItemProps>>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className
    )}
    {...props}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef<typeof Accordion.Header, React.PropsWithChildren<Accordion.AccordionTriggerProps>>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<typeof Accordion.Content, React.PropsWithChildren<Accordion.AccordionContentProps>>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));

const ExperienceSummary = () => (
  <Accordion.Root
    className="bg-mauve6 w-full rounded-md"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Excellent skills in front-end development</AccordionTrigger>
      <AccordionContent>Using React, JavaScript, HTML5, CSS</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Expertise in Node.js based application development</AccordionTrigger>
      <AccordionContent>
        Has developed application backends for multiple projects using Express.JS, middlewares,
        implementing and enhancing Authentication backends
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Good experience working with cloud computing services like AWS, Cloud Foundry</AccordionTrigger>
      <AccordionContent>
        Has worked on analysis and implementation of infrastructure and deployment pipelines for frontend and backend services, AWS Lambda functions etc. Also 
        in AWS. Also has worked on SAP Business Technology Platform with CloudFoundry.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>Exceptional ability in researching and prototyping ideas</AccordionTrigger>
      <AccordionContent>
        History of coming up with new ideas and implementing them to success with high customer usage and satisfaction. Has tirelessly worked on prototypes and leading the 
        design of architecture from both frontend and backend and ensures successful rollout to production.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>Worked previously at SAP Labs India, IndianOil Corporation</AccordionTrigger>
      <AccordionContent>
        <p>Started career at <a href="https://iocl.com/">IndianOil Corporation</a> as Grade A Officer</p>
        <p>Joined <a href="https://www.sap.com/india/index.html">SAP Labs India</a> and left the company as Senior Developer and Architect</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);


export default ExperienceSummary;