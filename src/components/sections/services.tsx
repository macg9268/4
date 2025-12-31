import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Code } from "lucide-react";

const services = [
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "DevOps Services",
    description: "We streamline development and operations to help your teams deliver faster and more reliably.",
    features: [
      "CI/CD pipeline setup and optimization",
      "Infrastructure as Code (IaC)",
      "Monitoring, logging, and alerting",
      "Deployment automation",
    ],
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Automation Consulting",
    description: "We eliminate manual work through smart automation strategies.",
    features: [
      "Process automation",
      "Workflow optimization",
      "Tool integration and scripting",
      "Custom automation solutions",
    ],
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Website Consulting",
    description: "We help you build and optimize websites that perform, scale, and convert.",
    features: [
      "Website architecture consulting",
      "Performance and security audits",
      "Scalability and cloud hosting strategy",
      "Technical SEO and optimization",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete suite of cloud services to power your business, from startups to enterprises.
          </p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-left p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0 items-start">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 flex flex-col flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="h-4 w-4 mt-1 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
