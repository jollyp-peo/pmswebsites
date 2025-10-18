export const SERVICES = Array.from({ length: 200 }).map((_, i) => ({
  id: i,
  title: `Service Item ${i + 1}`,
  subtitle: i % 3 === 0 ? "E-Commerce" : i % 3 === 1 ? "Business Website" : "Landing Page"
}));
