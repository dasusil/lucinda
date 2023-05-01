function Footer() {
  return (
    <footer className="mt-80 border-t-2 border-black h-36 pt-8">
      <p className="text-center mx-auto block mb-16"> Juntos podemos fazer grandes coisas! </p>
      <small className="text-center mx-auto block">
        All rights reserved &copy; {new Date().getFullYear()}
      </small>
    </footer>
  );
}

export { Footer };
