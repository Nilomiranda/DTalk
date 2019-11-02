function AuthGuard(context) {
    const { userId } = context.prisma;
    // console.log({ userId });
    if (!userId) {
        throw new Error('Not authorized');
    }
}
