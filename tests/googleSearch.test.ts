import test from "@lib/baseTest"

test("google search test", async ({ googlepage }) => {
  await googlepage.navigationToSearch();
  await googlepage.searchBoxVisibility();
  await googlepage.enterSearchtext();
  await googlepage.clickingEnter();
});