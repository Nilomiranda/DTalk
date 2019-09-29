function isUserLogged(context) {
  const { userId } = context.prisma;
  console.log({ userId });
  if (!userId) {
    throw new Error('Not authorized');
  }
}

export default isUserLogged;
