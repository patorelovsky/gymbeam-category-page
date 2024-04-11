import { render, screen } from "@testing-library/react";
import Rating from "./Rating";

describe("Rating", () => {
  it("should display rating stars", () => {
    render(<Rating ratingValue={55} reviewsCount={2000} />);

    const stars = screen.getByTestId("rating-stars");
    expect(stars.childElementCount).toBe(5);
  });

  it("should display rating value", () => {
    const ratingValue = 55;
    render(<Rating ratingValue={ratingValue} reviewsCount={2000} />);

    const value = screen.getByTestId("rating-value");
    expect(value).toHaveTextContent(`${ratingValue}%`);
  });

  it("should display reviews count", () => {
    const reviewsCount = 56;
    render(<Rating ratingValue={55} reviewsCount={reviewsCount} />);

    const value = screen.getByTestId("rating-reviews");
    expect(value).toHaveTextContent(reviewsCount.toString());
  });

  it("should display reviews count in thousands", () => {
    const reviewsCount = 23456;
    render(<Rating ratingValue={55} reviewsCount={reviewsCount} />);

    const value = screen.getByTestId("rating-reviews");
    expect(value).toHaveTextContent((reviewsCount / 1000).toFixed(2) + "k");
  });
});
