import sanityClient from "@sanity/client";

export const client = new sanityClient({
  projectId: 'cwazbo5o',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'skXRERyHJpqQXNYG0HWqbbuBoW4FCrm6rnpaIKEjVhjqe9g6BN2IXEmBtVnGTI1OzOOmOdpwblC5W0vkpW9ABddWuWFTouDbajukMrCoiTAld12aqoCtiLjfrHRJmVeS1HpjKn0261tgpbfswLGIR40tcEoZD9KLxIXFLPg8NSwIsJPbAW2m',
  useCdn: false,
});
