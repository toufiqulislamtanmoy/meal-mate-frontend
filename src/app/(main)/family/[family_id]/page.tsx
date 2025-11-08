import FamilyDetails from "@/components/Family/FamilyDetails";

const FamilyMealDetails = async ({
  params,
}: {
  params: Promise<{ family_id: string }>;
}) => {
  // const { family_id } = await params;

  return (
    <>
      <FamilyDetails />
    </>
  );
};

export default FamilyMealDetails;
