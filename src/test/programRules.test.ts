import { describe, expect, it } from "vitest";
import { pricingPlans } from "../data/pricingPlans";
import { courseDays, courseLectures } from "../data/courseRoadmap";

describe("program package rules", () => {
  it("keeps Starter recorded with 20 lectures and no guarantee", () => {
    const starter = pricingPlans.find((plan) => plan.slug === "starter");
    expect(starter?.recordedLectures).toBe(20);
    expect(starter?.guaranteedClients).toBe(0);
    expect(starter?.guaranteeDays).toBeNull();
    expect(starter?.refundGuarantee).toBe(false);
  });
  it("guarantees one client in 45 days for Professional", () => {
    const plan = pricingPlans.find((item) => item.slug === "professional");
    expect(plan?.guaranteedClients).toBe(1);
    expect(plan?.guaranteeDays).toBe(45);
    expect(plan?.refundGuarantee).toBe(true);
  });
  it("guarantees two clients in 45 days for Elite", () => {
    const plan = pricingPlans.find((item) => item.slug === "elite");
    expect(plan?.guaranteedClients).toBe(2);
    expect(plan?.guaranteeDays).toBe(45);
    expect(plan?.refundGuarantee).toBe(true);
  });
});

describe("45-day course schedule", () => {
  it("includes every day from 1 through 45 exactly once", () => {
    expect(courseDays.map((day) => day.day)).toEqual(Array.from({ length: 45 }, (_, index) => index + 1));
  });
  it("contains 20 lectures scheduled before the sales-only phase", () => {
    expect(courseLectures).toHaveLength(20);
    expect(courseDays.filter((day) => day.lecture).map((day) => day.lecture)).toEqual(Array.from({ length: 20 }, (_, index) => index + 1));
    expect(courseDays.filter((day) => day.lecture).every((day) => day.day <= 30)).toBe(true);
  });
  it("reserves days 31–45 exclusively for appointments and closing", () => {
    const finalDays = courseDays.filter((day) => day.day > 30);
    expect(finalDays).toHaveLength(15);
    for (const day of finalDays) {
      expect(["appointments", "closing"]).toContain(day.focus);
      expect(day.lecture).toBeUndefined();
    }
  });
});