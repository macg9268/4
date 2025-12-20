import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cloud, Database, Server, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Infrastructure (IaaS)",
    description: "Flexible and scalable computing resources, storage, and networking on demand. Perfect for building and managing your infrastructure."
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "Platform (PaaS)",
    description: "Develop, run, and manage applications without the complexity of building and maintaining the infrastructure yourself."
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Software (SaaS)",
    description: "Access our ready-to-use software applications over the Internet, on a subscription basis. No installation required."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Cloud Security",
    description: "Protect your data, applications, and infrastructure from threats with our comprehensive suite of security services."
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Cloud Offerings</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete suite of cloud services to power your business, from startups to enterprises.
          </p>
        </div>
        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0 items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base flex-grow">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
