import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge,
  Button,
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

const articles = [
  {
    id: 1,
    title: "Smart Project Mangment Analogy: A Practical Experiment with AI, Infrared Sensors, and Cleaner Fuel",
    content: [
      {
        subtitle: "Introduction: Embracing Innovation",
        text: "If you're a forward-thinking project manager taking practical steps to reduce commercial costs and improve efficiency, this analogy is for you. Although the title may sound like a pilot deployment, it suits enterprise needs. This concept will introduce the potential of machine learning (ML) and how it can scale within enterprise machinery and logistics. Without overwhelming technical terms, we'll explore a basic MVP concept integrating a Smart App with Rapid Infrared Technology."
      },
      {
        subtitle: "Setting the Context: A Science Experiment",
        text: "This is purely a science experiment please do not attempt at home. As someone who loves solving issues with software, I've explored how we can scan biomass for impurities to later use it for bio-oil. It’s crucial to identify unwanted materials like metals and water in biomass (such as seaweed) to demonstrate, with empirical evidence, its viability as an organic combustible oil. The experiment will be small-scale, documented with notes and video. This is currently a thesis project, inspired by previous work from Ivy League researchers. We're choosing hardware and software tools to combine with one or two ML algorithms to identify the purest bio-oil. But what exactly is biomass and combustion, and how do we integrate infrared hardware and ML to detect impurities and improve combustion?"
      },
      {
        subtitle: "Understanding Biomass and Combustion",
        text: "What is biomass? It includes wood, seaweed, food scraps, corn stalks, and animal waste simple organic materials. When processed properly, these materials can be combusted to generate fuel. Combustion is a chemical reaction where fuel burns in oxygen to produce heat and light, much like wood in a fire. Fossil fuels work similarly but produce more carbon dioxide. Biomass, on the other hand, can absorb CO₂ during growth, offering a cleaner alternative."
      },
      {
        subtitle: "Why Choose Biomass Over Fossil Fuels?",
        text: "Biomass, derived from agricultural waste and organic materials, can be regrown. In contrast, fossil fuels like coal and natural gas take centuries to form. CO₂ released from burning biomass is offset by the CO₂ absorbed when growing new biomass. Fossil fuels contribute to long-term greenhouse effects. Scientists continue exploring different methods to address this imbalance, with biomass being one promising solution."
      },
      {
        subtitle: "ML and the Challenge of Biomass Combustion",
        text: "To evaluate this system, I’ll conduct a small in-home experiment focused on transforming solid biomass into bio-oil. I’ll use a two-stroke moped engine as a practical and affordable combustion testbed. This experiment aims to reveal the potential of biomass in real-world use cases, highlighting both opportunities and limitations."
      },
      {
        text: "One major challenge in pyrolysis (thermal decomposition without oxygen) is impurities salts, mud, water, sodium, chloride, heavy metals which interfere with combustion and can damage engines."
      },
      {
        text: "Our solution involves infrared sensing and spectroscopy. Each biomass sample emits a unique spectral fingerprint. By scanning samples and analyzing the light spectrum, we can classify them as clean, contaminated, or metal-contaminated. QR codes can be used for tracking and organizing this data efficiently."
      },
      {
        text: "Machine learning techniques like Support Vector Machines (SVMs), Random Forests, or Neural Networks can be trained on labeled spectral data. These models learn to detect impurities in real time, enabling smart sorting before and after pyrolysis."
      },
      {
        text: "Though high end infrared and ML equipment is costly, our goal is to simulate the system affordably. The moped engine allows us to assess bio-oil performance. Impurities such as water and particulates lead to incomplete combustion and injector clogging. Basic filtration and treatment can improve thermal efficiency. This project also explores how low-cost sensors and ML could help rural users monitor and improve fuel quality, bringing advanced diagnostics to small-scale producers."
      },
      {
        subtitle: "Predictive Analytics in Business",
        text: "In manufacturing, an ML model can detect impurities via sensor data and automatically trigger business logic such as rejecting a batch, alerting a technician, or adjusting machinery. This reduces downtime, improves quality, and enhances customer satisfaction."
      },
      {
        text: "ML is revolutionizing business by making processes smarter. Whether it's predicting behavior, optimizing inventory, or detecting material defects, algorithms analyze real-time and historical data to make decisions that once required human judgment."
      },
      {
        subtitle: "In Conclusion",
        text: "Machine learning is no longer optional it's a strategic necessity. By turning data into real-time, actionable insights, companies can improve workflows, reduce error, and gain a competitive edge."
      },
      {
        text: "Whether you're enhancing quality control, personalizing customer experiences, or managing supply chains, ML-driven automation empowers businesses to adapt and lead. Those who embrace ML today will shape the industries of tomorrow."
      }
    ],
    excerpt:
      "Cleaner fuel production using seaweed and sensor hardware for biomass projects. With the rise of AI, we can now test its logic by identifying impurities and refining raw biomass for cleaner fuel. If you're a forward-thinker interested in cutting fuel costs and improving air quality, this article is for you. Even if pilot deployment doesn’t suit your enterprise yet, you'll learn how ML can scale logistics. Biomass isn't just playground wood chips—it's unconventional organic waste that absorbs carbon. So why aren’t we using it more widely? High initial costs make it less viable. But with AI, the solution is within reach.",
    category: "ML & Science",
    date: "May 15, 2025",
    featured: true
  },
  {
    id: 2,
    title: "Coming Soon",
    content: "Full article coming soon",
    excerpt: "Best practices for architecting React applications that scale with your user base.",
    category: "Web Development",
    date: "April 28, 2023"
  }
];

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <Container className="pt-5">
        <h3>Article not found</h3>
        <Button color="info" tag={Link} to="/blog">
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <>
      <DemoNavbar />
      <main className="pt-7">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <Card className="shadow border-0 mb-5">
                <CardBody className="p-5">
                  <Badge color="info" pill className="mb-2">
                    {article.category}
                  </Badge>
                  <p className="text-muted small">{article.date}</p>
                  <CardTitle tag="h2">{article.title}</CardTitle>
                  {Array.isArray(article.content) ? (
                    article.content.map((section, index) => (
                      <div key={index} className="mb-4">
                        {section.subtitle && (
                          <h5 className="mb-2">{section.subtitle}</h5>
                        )}
                        <CardText>
                          {typeof section.text === "string"
                            ? section.text
                            : section.text && typeof section.text.text === "string"
                            ? section.text.text
                            : ""}
                        </CardText>
                      </div>
                    ))
                  ) : (
                    <CardText>{article.content}</CardText>
                  )}
                  <Button color="primary" tag={Link} to="/blog">
                    Back to Blog
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <CardsFooter />
    </>
  );
};

export default ArticlePage;
