export default defineAppConfig({
  ui: {
    colors: {
      primary: "brand",
    },
    pricingPlan: {
      defaultVariants: {
        variant: "subtle",
      },
    },
    page: {
      slots: {
        root: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8",
      },
    },
  },
});
