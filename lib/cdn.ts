const uploadUrlToCdn = async (url: string) => {
  if (!url) return;

  try {
    console.log(url);
    const response = await fetch("https://cdn.hackclub.com/api/v3/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer beans`,
      },
      body: JSON.stringify([url]),
    });

    const data = await response.json();
    console.log(data.files[0].deployedUrl);
    return data.files[0].deployedUrl;
  } catch (error) {
    console.error("Error:", error);
    return "";
  }
};

export default uploadUrlToCdn;
