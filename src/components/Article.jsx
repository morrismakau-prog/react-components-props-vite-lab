// Shows one blog post. Child of ArticleList.
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // <30 min: 1 ☕️ per 5 min. 30+ min: 1 🍱 per 10 min (rounded up)
  const emojis =
    minutes < 30
      ? "☕️".repeat(Math.ceil(minutes / 5))
      : "🍱".repeat(Math.ceil(minutes / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {/* only show reading time if the post has minutes */}
      {minutes && (
        <span>
          {" "}
          • {emojis} {minutes} min read
        </span>
      )}
      <p>{preview}</p>
    </article>
  );
}

export default Article;