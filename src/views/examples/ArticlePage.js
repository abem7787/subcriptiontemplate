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
    title: "California labor laws, maintaining ethical operations.",
    content: [
 
      {
        subtitle: "Understanding California Labor Laws for Tech and Business",
        text: "California labor law requires employers to provide overtime pay for any hours worked over 8 in a single day or 40 in a week. Non-exempt employees are also entitled to meal and rest breaks. A common legal issue arises when employers misclassify workers—especially engineers and freelancers as independent contractors, which can be a violation under AB5 law if the individual meets the criteria of an employee. Accurate time tracking is essential; any falsified or incorrect records can lead to serious litigation. Equal pay and anti-discrimination laws are strictly enforced, particularly in the tech industry, where companies face heightened scrutiny. Misclassifying workers to avoid providing benefits or paying taxes is both unethical and illegal. Disputes often arise not from malice but from project delays or miscommunication. To prevent these issues, businesses should use contract management tools like DocuSign or PandaDoc and draft detailed Service Level Agreements (SLAs) that define scope, deadlines, and accountability. Regular training for HR staff, developers, and management on labor laws, harassment prevention, and workplace ethics is also critical. Finally, consulting a legal professional familiar with Los Angeles ordinances and California labor law can help avoid costly mistakes and penalties. "
      },
      {
        subtitle: "Why Many California Tech Businesses Are Relocating",
        text: "To operate ethically and legally in Los Angeles, here are best practices for app development companies. Choose platforms that ensure transparent and tamper-proof time records for hourly employees and contractors. Tools like Toggl, Harvest, or custom-built timestamp apps with blockchain-style logging can help avoid accusations of “fake” or manipulated timestamps. Understand the ABC Test under AB5 and classify workers correctly: The worker is free from control/direction, The work performed is outside the usual business operations, The worker is engaged in an independently established trade."
      },
      {
        subtitle: "Why Many California Tech Businesses Are Relocating",
        text: "Many tech companies are leaving California due to high corporate and income taxes, strict labor laws, and the high cost of legal compliance. Common issues include frequent disputes over minor labor violations and false employee allegations such as overtime abuse or timestamp manipulation. Despite these challenges, businesses that implement strong ethical standards and reliable infrastructure can still succeed and benefit from Los Angeles’ deep talent pool and innovation ecosystem."
      },
      {
        subtitle: "In conclusion, dont lose your hair",
        text: "While California labor laws can feel overwhelming, businesses that invest in compliance, documentation, and transparency can still thrive in Los Angeles. The key is to be proactive rather than reactive. Yes, many companies are leaving the state — but that doesn't mean success isn't possible in California. With the right bespoke software tools, ethical leadership, and legal guidance, you can avoid false accusations, maintain your reputation, and grow your business the right way."
      },
    
    ],
    excerpt:
      "Cleaner fuel production using seaweed and sensor hardware for biomass projects. With the rise of AI, we can now test its logic by identifying impurities and refining raw biomass for cleaner fuel. If you're a forward-thinker interested in cutting fuel costs and improving air quality, this article is for you. Even if pilot deployment doesn’t suit your enterprise yet, you'll learn how ML can scale logistics. Biomass isn't just playground wood chips—it's unconventional organic waste that absorbs carbon. So why aren’t we using it more widely? High initial costs make it less viable. But with AI, the solution is within reach.",
    category: "Software & Law",
    date: "May 15, 2025",
    featured: true
  },
  {
    id: 2,
    title: "California labor laws, maintaining ethical operations.",
    category: "Software & Law", 

       content: [


  {
      "subtitle": "Why Make a Community-Based Cryptocurrency",
      "text": "Easy question, the advent of cryptocurrency has become the most controversial and convenient tool placed in the age of technology. We now have ways to empower communities, create new economies with, bespoke digital coins, while fostering transparency, and a controlled space for inflationary issues. A chance where communities can unite through peer-to-peer transactions and tracable recorded blockchain."
    },
    {
      "subtitle": "Peer-to-Peer Lending Pools:",
      "text": "Members can contribute to a shared pool of tokens. You can provide in-house microloans with flexible conditions and rates. Smart contracts can ensure automatic repayment schedules and penalties in case of default."
    },
    {
      "subtitle": "Staking-Based Lending:",
      "text": "Users can stake their tokens into a smart contract that can allocate to loans and other distributions. The lender can earn interest, and the borrower gets quick access to funding, all without the ties from a traditional bank. Communities can also vote for high-impact projects. The community can vote to approve interest free or low-interest loans. Completely decentralized techniques with no person in control, or a company, or bank, or anyone with a higher hat. Decisions are made collectively and ethically, right from the comfort of your handheld device or in front of a desktop."
    },
    {
      "subtitle": "Token Collateralization",
      "text": "Borrowers can lock up and load tokens as collateral to receive stablecoins or other assets, reducing risk for the community and avoiding bad debt."
    },
    {
      "subtitle": "Nonprofit & Humanitarian Use Cases",
      "text": "Community-based cryptocurrencies offer powerful tools for nonprofits and humanitarian efforts. One of the major benefits is transparent donation tracking. With blockchain technology, donors can see exactly where their funds are going, providing trust and accountability that traditional systems often lack. In times of crisis, communities can rapidly distribute emergency relief tokens to those affected, allowing them to access essentials like food, medicine, and temporary shelter without delay or bureaucracy. Additionally, these tokens can be used to reward volunteers for their time and contributions. Instead of relying solely on goodwill, organizations can issue digital tokens as incentives, which can be redeemed for goods, services, or discounts within the community—encouraging more consistent engagement. Furthermore, community led development becomes possible by using crypto to fund projects like building schools, food banks, and tech centers. Members can vote on how funds are allocated, ensuring that initiatives reflect collective priorities and needs. This decentralized, transparent model empowers communities to take charge of their own progress and resilience."
    },
        {
      "subtitle": "Starting Small",
      "text": "You can launch your own token with a modest investment of around $300. We can begin together with a pilot project, budgeting between $800–$1,000 to test the program’s frequency and engagement. By creating a small fund for members, we can utilize tools like Google Forms for voting, Gnosis Safe for shared wallet management, and Telegram or WhatsApp for group coordination. We can also encourage members to share stories and testimonials during services, and post regular updates on social media. The long-term vision is to develop a dedicated mobile wallet, allowing members to become more actively involved. The key is to start with clear goals and grow from there."
    }
     
    ],
    date: "May 15, 2025"
  }
  ,  {
    id: 3,
    title: "A Practical Experiment with AI, Infrared Sensors, and Cleaner Fuel",
    content: "A Practical Experiment with AI, Infrared Sensors, and Cleaner Fuel",
    excerpt: "Best practices for architecting React applications that scale with your user base.",
    category: "ML & Software Development", 

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
    date: "May 15, 2025"
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
