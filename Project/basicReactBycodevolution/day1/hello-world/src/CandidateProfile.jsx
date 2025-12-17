export const CandidateProfile = () => {
  const name = "John Doe";
  const role = "Software Engineer";
  const yearsOfExperience = 5; 
  const isAvailable = true; 
  return (
    <div>
        <h2>{name}</h2>
        <p>{role} with {yearsOfExperience} years of experience</p>
        <p>Started in {2025 - yearsOfExperience }</p>
        <p>{isAvailable ? "Available for hire" : "Not available"}</p>
        <p>Contact: {name.toLocaleLowerCase().replace("",".")}@email.com</p>
    </div>
  );
}