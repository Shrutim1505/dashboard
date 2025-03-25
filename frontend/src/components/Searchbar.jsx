import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    InputGroup,
    Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faTimes,
    faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({
    searchText,
    handleSearch,
    handleClearSearch,
    handleRefresh,
    fetchData,
    isRefreshing,
    placeholder,
    refreshLabel,
}) => {
    return (
        <Card className="mb-5 border-0 bg-light shadow-sm rounded-xl">
            <Card.Body className="py-4">
                <Container fluid className="px-0">
                    <Row className="align-items-center g-4">
                        <Col xs={12} md={6} lg={5} xl={4}>
                            <div className="position-relative">
                                <InputGroup
                                    className="border rounded-pill overflow-hidden shadow-sm bg-white"
                                    style={{ height: "45px" }}
                                >
                                    <Button
                                        variant="outline-white"
                                        className="border-0 bg-transparent text-primary position-absolute start-0 d-flex align-items-center px-3"
                                        onClick={() => fetchData()}
                                        disabled={isRefreshing}
                                        style={{ height: "100%" }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faSearch}
                                            className="me-2"
                                            style={{ color: "#dc3545" }}
                                        />
                                        {isRefreshing && (
                                            <span
                                                className="spinner-border spinner-border-sm text-primary"
                                                role="status"
                                            ></span>
                                        )}
                                    </Button>
                                    <Form.Control
                                        placeholder={placeholder}
                                        value={searchText}
                                        onChange={handleSearch}
                                        className="border-0 shadow-none px-4 ps-5"
                                        style={{
                                            fontSize: "1rem",
                                            height: "100%",
                                        }}
                                    />
                                    {searchText && (
                                        <Button
                                            variant="outline-white"
                                            className="border-0 bg-transparent position-absolute end-0 d-flex align-items-center px-3"
                                            onClick={handleClearSearch}
                                            disabled={isRefreshing}
                                            style={{ height: "100%" }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className="text-secondary"
                                            />
                                        </Button>
                                    )}
                                </InputGroup>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            lg={7}
                            xl={8}
                            className="d-flex justify-content-md-end"
                        >
                            <Button
                                variant="outline-danger"
                                size="lg"
                                className="rounded-pill px-5 py-3 d-flex align-items-center justify-content-center shadow-sm fw-medium border-2"
                                onClick={handleRefresh}
                                disabled={isRefreshing}
                                style={{
                                    transition: "all 0.3s ease",
                                    height: "45px",
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faSyncAlt}
                                    className="me-2"
                                    spin={isRefreshing}
                                />
                                <span>
                                    {isRefreshing
                                        ? "Refreshing..."
                                        : refreshLabel}
                                </span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default SearchBar;
