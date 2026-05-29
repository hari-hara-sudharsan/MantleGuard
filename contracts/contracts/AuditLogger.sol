// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AuditLogger {

    struct AuditRecord {
        string contractName;
        bytes32 auditHash;
        uint256 timestamp;
        address auditor;
    }

    AuditRecord[] public records;

    event AuditLogged(
        string contractName,
        bytes32 auditHash,
        uint256 timestamp,
        address auditor
    );

    function logAudit(
        string memory contractName,
        bytes32 auditHash
    ) public {

        records.push(
            AuditRecord(
                contractName,
                auditHash,
                block.timestamp,
                msg.sender
            )
        );

        emit AuditLogged(
            contractName,
            auditHash,
            block.timestamp,
            msg.sender
        );
    }

    function getAuditCount()
        public
        view
        returns(uint256)
    {
        return records.length;
    }
}