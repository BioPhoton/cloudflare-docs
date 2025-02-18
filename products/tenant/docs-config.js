const productIconKey = "tenant";

module.exports = {
  product: "Tenant",
  pathPrefix: "/tenant",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/tenant",
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg"><path d="M27.6375 26.07H20.3775C16.169 26.074 12.134 27.747 9.15744 30.7221C6.18091 33.6973 4.50596 37.7315 4.5 41.94L6 43.44H42L43.5 41.94C43.4941 37.7341 41.8212 33.7021 38.8479 30.7274C35.8746 27.7527 31.8434 26.0779 27.6375 26.07ZM7.59 40.44C7.96235 37.309 9.46922 34.4229 11.8256 32.3278C14.1819 30.2326 17.2244 29.0736 20.3775 29.07H27.6375C30.7841 29.0828 33.8175 30.2459 36.166 32.3402C38.5144 34.4345 40.0159 37.3154 40.3875 40.44H7.59Z" /><path d="M24.0375 24C26.1142 24 28.1443 23.3842 29.871 22.2304C31.5977 21.0767 32.9435 19.4368 33.7382 17.5182C34.533 15.5996 34.7409 13.4884 34.3357 11.4516C33.9306 9.41476 32.9306 7.54383 31.4621 6.07538C29.9937 4.60693 28.1227 3.6069 26.0859 3.20176C24.0491 2.79661 21.9379 3.00455 20.0193 3.79927C18.1007 4.59399 16.4608 5.9398 15.3071 7.66652C14.1533 9.39323 13.5375 11.4233 13.5375 13.5C13.5375 16.2848 14.6437 18.9555 16.6129 20.9246C18.582 22.8938 21.2527 24 24.0375 24ZM24.0375 6C25.5209 6 26.9709 6.43987 28.2043 7.26398C29.4376 8.08809 30.3989 9.25943 30.9666 10.6299C31.5343 12.0003 31.6828 13.5083 31.3934 14.9632C31.104 16.418 30.3897 17.7544 29.3408 18.8033C28.2919 19.8522 26.9555 20.5665 25.5007 20.8559C24.0458 21.1453 22.5378 20.9968 21.1674 20.4291C19.7969 19.8614 18.6256 18.9001 17.8015 17.6668C16.9774 16.4334 16.5375 14.9834 16.5375 13.5C16.5375 11.5109 17.3277 9.60323 18.7342 8.1967C20.1407 6.79018 22.0484 6 24.0375 6Z" /></svg>',
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com"
    }
  ],
  search: {
    indexName: "",
    apiKey: "",
    algoliaOptions: { 'facetFilters': ''}
  },
  siteMetadata: {
    title: "Cloudflare Tenant docs",
    description: "With Cloudflare’s new provisioning APIs, you can provision and manage Cloudflare accounts and services for your team or your customers. A new set of APIs built into our Client v4 API library make a streamlined onboarding and setup experience",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/tenant",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png"
  }
}
