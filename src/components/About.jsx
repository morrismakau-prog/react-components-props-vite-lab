// Shows the blog logo and description. Child of App.
function About({ image = "https://via.placeholder.com/215", about }) {
  // Default value: placeholder is used when no image prop is passed
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;