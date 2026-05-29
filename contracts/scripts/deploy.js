async function main() {

  const AuditLogger =
      await ethers.getContractFactory(
          "AuditLogger"
      );

  const auditLogger =
      await AuditLogger.deploy();

  await auditLogger.waitForDeployment();

  console.log(
      "AuditLogger deployed:",
      await auditLogger.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});