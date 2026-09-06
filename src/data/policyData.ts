import type { Policy } from "../model/Policy";

const refundEligibilityData = [
  {
    header: "Eligible Cases",
    list: [
      "Failed transactions where payment is deducted but service is not delivered",
      "Duplicate payment processing",
      "Technical transaction failures",
      "Incorrect debit caused by verified system errors",
      "Reversal approved by banking or payment partners",
    ],
  },
  {
    header: "Verification Requirements",
    list: [
      "Valid transaction reference number",
      "Registered mobile or email verification",
      "Supporting transaction proof where required",
      "Successful internal verification process",
      "Compliance with banking timelines",
    ],
  },
];

const nonRefundableData = [
  {
    header: undefined,
    list: [
      "Incorrect account, mobile number, or UPI details entered by the user",
      "Successful recharge or bill payment processed to the intended account",
      "User negligence, unauthorized access, or credential misuse",
      "Transactions blocked due to regulatory or compliance reasons",
      "Service charges, convenience fees, gateway charges, or processing fees",
      "Refund requests raised after permissible timelines",
    ],
  },
];

const refundProcessingTimelineData = [
  {
    header: undefined,
    list: [
      "UPI & Wallet Reversals",
      "Banking Settlement Timelines",
      "Gateway Processing Cycles",
    ],
  },
];

const failedPendingTransactionsData = [
  {
    header: undefined,
    list: [
      "Pending transactions may automatically reverse within standard banking timelines",
      "Users should avoid duplicate payment attempts while a transaction is under processing",
      "Transaction disputes may require additional verification",
    ],
  },
];

const cancellationPolicyData = [
  {
    header: undefined,
    list: [
      "Cancellation requests are subject to transaction status verification",
      "API and merchant settlement services may follow separate contractual terms",
      "Subscription or service agreements may contain independent cancellation clauses",
    ],
  },
];

const legalRegulatoryComplianceData = [
  {
    header: undefined,
    list: [
      "Digital Personal Data Protection Act, 2023",
      "Information Technology Act, 2000",
      "Applicable RBI Directions & Banking Regulations",
      "NPCI & BBPS Operational Policies",
      "Applicable Consumer Protection Laws",
    ],
  },
];

export const policyData: Policy[] = [
  {
    header: "Overview",
    subHeader:
      "Nilparrot provides digital payment, recharge, BBPS, API, wallet, merchant, and fintech services through various online platforms and partner networks",
    para: "Due to the nature of digital financial transactions, refunds and reversals are subject to banking partner rules, NPCI regulations, payment gateway policies, settlement systems, and operational verification processes.",
    subList: undefined,
    note: "By using our services, users agree to this Refund & Cancellation Policy.",
  },
  {
    header: "Refund Eligibility",
    subHeader: undefined,
    para: undefined,
    subList: refundEligibilityData,
    note: undefined,
  },
  {
    header: "Non-Refundable Transactions",
    subHeader: undefined,
    para: undefined,
    subList: nonRefundableData,
    note: "Users are responsible for verifying transaction details before confirmation.",
  },
  {
    header: "Refund Processing Timeline",
    subHeader:
      "Approved refunds are generally processed within a reasonable timeframe depending on the payment method, banking network, settlement cycle, and partner institution policies.",
    para: "Actual credit timelines may vary depending on banks, payment processors, and financial institutions.",
    subList: refundProcessingTimelineData,
    note: undefined,
  },
  {
    header: "Failed & Pending Transactions",
    subHeader:
      "In certain situations, transactions may remain pending due to banking, telecom, NPCI, BBPS, or payment gateway delays.",
    para: undefined,
    subList: failedPendingTransactionsData,
    note: undefined,
  },
  {
    header: "Cancellation Policy",
    subHeader:
      "Most digital payment, recharge, and bill payment transactions are processed instantly and therefore cannot be cancelled once initiated successfully.",
    para: undefined,
    subList: cancellationPolicyData,
    note: undefined,
  },
  {
    header: "Legal & Regulatory Compliance",
    subHeader:
      "This Refund & Cancellation Policy operates in accordance with applicable Indian laws, banking regulations, RBI guidelines, NPCI operational standards, and financial compliance requirements.",
    para: undefined,
    subList: legalRegulatoryComplianceData,
    note: undefined,
  },
];
