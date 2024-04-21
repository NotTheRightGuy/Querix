import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="flex-col items-center w-full">
      <h1 className="text-4xl text-black mb-8">Frequently asked questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline font-semibold">How does Querix work?</AccordionTrigger>
          <AccordionContent className="font-normal text-gray-600">
            Querix utilizes natural language processing to understand user
            queries and convert them into SQL queries. Users can simply converse
            with the AI, describing the data they need, and Querix will generate
            the corresponding SQL query.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:no-underline font-semibold">
            Who can benefit from using Querix?
          </AccordionTrigger>
          <AccordionContent className="font-normal text-gray-600">
            Querix is beneficial for developers, data analysts, business
            analysts, and anyone else who works with databases and needs to
            generate SQL queries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:no-underline font-semibold">Is Querix easy to use?</AccordionTrigger>
          <AccordionContent className="font-normal text-gray-600">
            Yes, Querix is designed to be user-friendly and intuitive. Users can
            interact with the system in natural language, eliminating the need
            for complex SQL syntax knowledge. Additionally, Querix features a
            simple and intuitive interface for ease of use.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="hover:no-underline font-semibold">
            Can Querix handle complex queries?
          </AccordionTrigger>
          <AccordionContent className="font-normal text-gray-600">
            Yes, Querix is capable of handling a wide range of query
            complexities. Whether you need a simple query or a more intricate
            one involving multiple tables and conditions, Querix can generate
            the SQL query for you.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
