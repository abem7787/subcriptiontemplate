import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class Blog extends React.Component {
  state = {
    articles: [
      {
        id: 1,
        title: "Advance Biomass purifcations: Smart App For Rapid Infrared Technology ",
        excerpt: "Learn Existing ML Models with real science infrastructure.",
        category: "ML & Science",
        date: "May 15, 2023",
        featured: true
      },
      {
        id: 2,
        title: "Building Scalable React Applications",
        excerpt: "Best practices for architecting React applications that scale with your user base.",
        category: "Web Development",
        date: "April 28, 2023"
      },
      {
        id: 3,
        title: "Mobile App Performance Optimization",
        excerpt: "Techniques to dramatically improve performance in cross-platform mobile applications.",
        category: "Mobile Development",
        date: "April 10, 2023"
      },
      {
        id: 4,
        title: "The Future of Generative AI in Business",
        excerpt: "How generative AI is transforming content creation and business processes.",
        category: "Artificial Intelligence",
        date: "March 22, 2023"
      },
      {
        id: 5,
        title: "Microservices Architecture Patterns",
        excerpt: "Essential patterns for designing robust microservices architectures.",
        category: "Software Architecture",
        date: "March 5, 2023"
      },
      {
        id: 6,
        title: "DevOps Best Practices for 2023",
        excerpt: "Streamline your development pipeline with these modern DevOps techniques.",
        category: "DevOps",
        date: "February 18, 2023"
      }
    ],
    categories: [
      "All Posts",
      "Artificial Intelligence",
      "Web Development",
      "Mobile Development",
      "Software Architecture",
      "DevOps"
    ],
    activeCategory: "All Posts",
    searchQuery: ""
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleCategoryChange = (category) => {
    this.setState({ activeCategory: category });
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  getFilteredArticles = () => {
    const { articles, activeCategory, searchQuery } = this.state;

    return articles.filter(article => {
      const matchesCategory = activeCategory === "All Posts" || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  };

  render() {
    const { categories, activeCategory } = this.state;
    const filteredArticles = this.getFilteredArticles();
    const featuredArticle = this.state.articles.find(article => article.featured);

    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-lg section-shaped pb-250 bg-gradient-info">
            <div className="shape shape-style-1 shape-default">
              <span /><span /><span /><span /><span /><span /><span /><span /><span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">Right Angle Insights</h1>
                    <p className="lead text-white">
                      Expert perspectives on software development, AI & Crypto integration,
                      and digital transformation strategies for enterprise growth without revealing too much priorietary information.
                    </p>
                    <div className="btn-wrapper">
                      <Button className="btn-icon mb-3 mb-sm-0" color="default" href="#featured-article">
                        <span className="btn-inner--text">Featured Article</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew">
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section>

          {featuredArticle && (
            <section id="featured-article" className="section bg-secondary">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white mb-4">
                          <i className="ni ni-book-bookmark" />
                        </div>
                        <h6 className="text-primary text-uppercase">Featured Article</h6>
                        <CardTitle tag="h2">{featuredArticle.title}</CardTitle>
                        <p className="mt-3">{featuredArticle.excerpt}</p>
                        <Badge color="primary" pill className="mr-1">
                          {featuredArticle.category}
                        </Badge>
                        <Badge color="default" pill>
                          {featuredArticle.date}
                        </Badge>
                        <Button
                          className="mt-4"
                          color="primary"
                          to={`/blog/${featuredArticle.id}`}
                          tag={Link}
                        >
                          Read full article/ More Info Comming Soon. 
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          )}

          <section className="section section-lg pt-lg-0">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-gradient-white shadow mb-5">
                    <CardBody>
                      <Row>
                        <Col md="8">
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-zoom-split-in" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Search articles..."
                                type="text"
                                onChange={this.handleSearchChange}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Input
                              type="select"
                              value={activeCategory}
                              onChange={(e) => this.handleCategoryChange(e.target.value)}
                            >
                              {categories.map(category => (
                                <option key={category} value={category}>
                                  {category}
                                </option>
                              ))}
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <Row>
                    {filteredArticles.map(article => (
                      <Col key={article.id} lg="4" md="6" className="mb-5">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-3">
                            <div className="d-flex justify-content-between">
                              <Badge color="info" pill className="mb-2">
                                {article.category}
                              </Badge>
                              <small className="text-muted">{article.date}</small>
                            </div>
                            <CardTitle tag="h5">{article.title}</CardTitle>
                            <CardText>{article.excerpt}</CardText>
                            <Button
                              className="mt-2"
                              color="info"
                              to={`/blog/${article.id}`}
                              tag={Link}
                            >
                              Read More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Blog;
