export function calculateMantleFee(
    gasEstimate
) {

    const gasPrice = 0.02;

    const l2Fee =
        gasEstimate * gasPrice;

    const daFee =
        gasEstimate * 0.005;

    return {
        l2Fee,
        daFee,
        totalFee:
            l2Fee + daFee
    };
}