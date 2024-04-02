export const blanceAddress = "0x3c48B934D126B582c9e22080F6A8aAb4B46E68bc"


export const blanceAbi = [
  { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
  { "inputs": [], "name": "BLANCE_InsufficientDeposit", "type": "error" },
  {
    "inputs": [],
    "name": "BLANCE__DelayedSubmissionNotPermissible",
    "type": "error"
  },
  { "inputs": [], "name": "BLANCE__EscrowAlreadyExists", "type": "error" },
  { "inputs": [], "name": "BLANCE__EscrowNeedsToBeActive", "type": "error" },
  { "inputs": [], "name": "BLANCE__EscrowNotActivated", "type": "error" },
  { "inputs": [], "name": "BLANCE__FundReleaseStillOnQueue", "type": "error" },
  { "inputs": [], "name": "BLANCE__GigCancellationFailed", "type": "error" },
  { "inputs": [], "name": "BLANCE__GigNotCompletedYet", "type": "error" },
  { "inputs": [], "name": "BLANCE__GigRejected", "type": "error" },
  {
    "inputs": [],
    "name": "BLANCE__InsufficientEscrowBalance",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BLANCE__InsufficientReleaseBalance",
    "type": "error"
  },
  { "inputs": [], "name": "BLANCE__InvalidReleaseStatus", "type": "error" },
  { "inputs": [], "name": "BLANCE__NoDisputeToResolve", "type": "error" },
  { "inputs": [], "name": "BLANCE__NoUnAuthorisedAccess", "type": "error" },
  { "inputs": [], "name": "BLANCE__OnlyClientCanAccess", "type": "error" },
  {
    "inputs": [],
    "name": "BLANCE__OnlyClientCanDepositEscrow",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BLANCE__OnlyClientCanRaiseDispute",
    "type": "error"
  },
  { "inputs": [], "name": "BLANCE__OnlyFreelancerHaveAccess", "type": "error" },
  {
    "inputs": [],
    "name": "BLANCE__OnlymediatorCanResolveDispute",
    "type": "error"
  },
  { "inputs": [], "name": "BLANCE__ProvideAValidAddress", "type": "error" },
  { "inputs": [], "name": "BLANCE__RejectedGig", "type": "error" },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_client",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "escrowAmount",
        "type": "uint256"
      }
    ],
    "name": "DepositedEscrow",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_client",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_freelancer",
        "type": "address"
      }
    ],
    "name": "EscrowCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_client",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_freelancer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_deadline",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_escrowAmt",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "_escrowId",
        "type": "bytes32"
      }
    ],
    "name": "EscrowCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_freelancer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "EscrowPaymentReleased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "_escrowId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_signature",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "startingTime",
        "type": "uint256"
      }
    ],
    "name": "GigAccepted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_freelancer",
        "type": "address"
      }
    ],
    "name": "ProjectSubmitted",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "applyGig",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "escrowId", "type": "bytes32" }
    ],
    "name": "cancelContract",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_freelancer", "type": "address" },
      { "internalType": "uint256", "name": "_deadline", "type": "uint256" },
      { "internalType": "uint256", "name": "_escrowAmount", "type": "uint256" }
    ],
    "name": "createEscrow",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "escrowId", "type": "bytes32" }
    ],
    "name": "escrowDeposited",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "freelancerToClientEscrowIds",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "escrowId", "type": "bytes32" }
    ],
    "name": "getEscrowDetails",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "client", "type": "address" },
          {
            "internalType": "address",
            "name": "freelancer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "escrowAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "gigStarted",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "deadline", "type": "uint256" },
          {
            "internalType": "enum BLance.Status",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct BLance.Escrow",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_freelancer", "type": "address" },
      { "internalType": "address", "name": "_client", "type": "address" }
    ],
    "name": "getEscrowIds",
    "outputs": [
      { "internalType": "bytes32[]", "name": "", "type": "bytes32[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "escrowId", "type": "bytes32" }
    ],
    "name": "getEscrowStatus",
    "outputs": [
      { "internalType": "enum BLance.Status", "name": "", "type": "uint8" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "name": "gigAccepted",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "escrowId", "type": "bytes32" }
    ],
    "name": "haveDispute",
    "outputs": [
      { "internalType": "enum BLance.Status", "name": "", "type": "uint8" }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "name": "idToEscrow",
    "outputs": [
      { "internalType": "address", "name": "client", "type": "address" },
      { "internalType": "address", "name": "freelancer", "type": "address" },
      { "internalType": "uint256", "name": "escrowAmount", "type": "uint256" },
      { "internalType": "uint256", "name": "gigStarted", "type": "uint256" },
      { "internalType": "uint256", "name": "deadline", "type": "uint256" },
      {
        "internalType": "enum BLance.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "onChainReputation",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "escrowId", "type": "bytes32" }
    ],
    "name": "releaseFunds",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "releaseQueuePeriod",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reputationScore",
    "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "escrowId", "type": "bytes32" }
    ],
    "name": "resolveDispute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_mediator", "type": "address" }
    ],
    "name": "setMediator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "escrowId", "type": "bytes32" }
    ],
    "name": "submitFinishedGig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
