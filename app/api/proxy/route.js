
export default async function handler(req, res) {
  const response = await fetch("http://188.132.135.5:6969/api/secret/");
  const data = await response.json();
  res.status(200).json(data);
}
