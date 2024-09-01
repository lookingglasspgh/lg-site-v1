const Custom404 = () => null;

export const getStaticProps = async () => ({
  redirect: {
    destination: '/',
    permanent: true,
  },
});

export default Custom404;
