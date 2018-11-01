export type URL = string;
export enum CropRegion {
  Center = "CENTER",
  Top = "TOP",
  Bottom = "BOTTOM",
  Left = "LEFT",
  Right = "RIGHT",
}
export enum ImageContentType {
  Png = "PNG",
  Jpg = "JPG",
  Webp = "WEBP",
}
export type HTML = string;
export enum SmartCollectionSortingType {
  AutomaticallySorted = "AUTOMATICALLY_SORTED",
  ManuallySorted = "MANUALLY_SORTED",
}
export enum ProductCollectionSortKeys {
  Title = "TITLE",
  Price = "PRICE",
  BestSelling = "BEST_SELLING",
  Created = "CREATED",
  Id = "ID",
  Manual = "MANUAL",
  CollectionDefault = "COLLECTION_DEFAULT",
  Relevance = "RELEVANCE",
}
export type UnsignedInt64 = string;
export enum MetafieldValueType {
  String = "STRING",
  Integer = "INTEGER",
  JsonString = "JSON_STRING",
}
export enum CollectionSortKeys {
  Title = "TITLE",
  UpdatedAt = "UPDATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export type DateTime = string;
export enum ProductImageSortKeys {
  CreatedAt = "CREATED_AT",
  Position = "POSITION",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export type Decimal = string;
export enum CurrencyCode {
  Usd = "USD",
  Eur = "EUR",
  Gbp = "GBP",
  Cad = "CAD",
  Afn = "AFN",
  All = "ALL",
  Dzd = "DZD",
  Aoa = "AOA",
  Ars = "ARS",
  Amd = "AMD",
  Awg = "AWG",
  Aud = "AUD",
  Bbd = "BBD",
  Azn = "AZN",
  Bdt = "BDT",
  Bsd = "BSD",
  Bhd = "BHD",
  Bif = "BIF",
  Byr = "BYR",
  Bzd = "BZD",
  Btn = "BTN",
  Bam = "BAM",
  Brl = "BRL",
  Bob = "BOB",
  Bwp = "BWP",
  Bnd = "BND",
  Bgn = "BGN",
  Mmk = "MMK",
  Khr = "KHR",
  Cve = "CVE",
  Kyd = "KYD",
  Xaf = "XAF",
  Clp = "CLP",
  Cny = "CNY",
  Cop = "COP",
  Kmf = "KMF",
  Cdf = "CDF",
  Crc = "CRC",
  Hrk = "HRK",
  Czk = "CZK",
  Dkk = "DKK",
  Dop = "DOP",
  Xcd = "XCD",
  Egp = "EGP",
  Etb = "ETB",
  Xpf = "XPF",
  Fjd = "FJD",
  Gmd = "GMD",
  Ghs = "GHS",
  Gtq = "GTQ",
  Gyd = "GYD",
  Gel = "GEL",
  Htg = "HTG",
  Hnl = "HNL",
  Hkd = "HKD",
  Huf = "HUF",
  Isk = "ISK",
  Inr = "INR",
  Idr = "IDR",
  Ils = "ILS",
  Iqd = "IQD",
  Jmd = "JMD",
  Jpy = "JPY",
  Jep = "JEP",
  Jod = "JOD",
  Kzt = "KZT",
  Kes = "KES",
  Kwd = "KWD",
  Kgs = "KGS",
  Lak = "LAK",
  Lvl = "LVL",
  Lbp = "LBP",
  Lsl = "LSL",
  Lrd = "LRD",
  Ltl = "LTL",
  Mga = "MGA",
  Mkd = "MKD",
  Mop = "MOP",
  Mwk = "MWK",
  Mvr = "MVR",
  Mxn = "MXN",
  Myr = "MYR",
  Mur = "MUR",
  Mdl = "MDL",
  Mad = "MAD",
  Mnt = "MNT",
  Mzn = "MZN",
  Nad = "NAD",
  Npr = "NPR",
  Ang = "ANG",
  Nzd = "NZD",
  Nio = "NIO",
  Ngn = "NGN",
  Nok = "NOK",
  Omr = "OMR",
  Pkr = "PKR",
  Pgk = "PGK",
  Pyg = "PYG",
  Pen = "PEN",
  Php = "PHP",
  Pln = "PLN",
  Qar = "QAR",
  Ron = "RON",
  Rub = "RUB",
  Rwf = "RWF",
  Wst = "WST",
  Sar = "SAR",
  Std = "STD",
  Rsd = "RSD",
  Scr = "SCR",
  Sgd = "SGD",
  Sdg = "SDG",
  Syp = "SYP",
  Zar = "ZAR",
  Krw = "KRW",
  Ssp = "SSP",
  Sbd = "SBD",
  Lkr = "LKR",
  Srd = "SRD",
  Szl = "SZL",
  Sek = "SEK",
  Chf = "CHF",
  Twd = "TWD",
  Thb = "THB",
  Tzs = "TZS",
  Ttd = "TTD",
  Tnd = "TND",
  Try = "TRY",
  Tmt = "TMT",
  Ugx = "UGX",
  Uah = "UAH",
  Aed = "AED",
  Uyu = "UYU",
  Uzs = "UZS",
  Vuv = "VUV",
  Vef = "VEF",
  Vnd = "VND",
  Xof = "XOF",
  Yer = "YER",
  Zmw = "ZMW",
}
export type StorefrontID = string;
export enum ProductVariantSortKeys {
  Title = "TITLE",
  Name = "NAME",
  Sku = "SKU",
  InventoryQuantity = "INVENTORY_QUANTITY",
  InventoryManagement = "INVENTORY_MANAGEMENT",
  InventoryLevelsAvailable = "INVENTORY_LEVELS_AVAILABLE",
  InventoryPolicy = "INVENTORY_POLICY",
  FullTitle = "FULL_TITLE",
  Popular = "POPULAR",
  Position = "POSITION",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export type Money = string;
export enum FulfillmentServiceType {
  GiftCard = "GIFT_CARD",
  Manual = "MANUAL",
  ThirdParty = "THIRD_PARTY",
}
export enum ProductVariantInventoryManagement {
  Shopify = "SHOPIFY",
  NotManaged = "NOT_MANAGED",
  FulfillmentService = "FULFILLMENT_SERVICE",
}
export enum ProductVariantInventoryPolicy {
  Deny = "DENY",
  Continue = "CONTINUE",
}
export enum WeightUnit {
  Kilograms = "KILOGRAMS",
  Grams = "GRAMS",
  Pounds = "POUNDS",
  Ounces = "OUNCES",
}
export enum CollectionRuleColumn {
  Tag = "TAG",
  Title = "TITLE",
  Type = "TYPE",
  Vendor = "VENDOR",
  VariantPrice = "VARIANT_PRICE",
  VariantCompareAtPrice = "VARIANT_COMPARE_AT_PRICE",
  VariantWeight = "VARIANT_WEIGHT",
  VariantInventory = "VARIANT_INVENTORY",
  VariantTitle = "VARIANT_TITLE",
}
export enum CollectionRuleRelation {
  Equals = "EQUALS",
  NotEquals = "NOT_EQUALS",
  GreaterThan = "GREATER_THAN",
  LessThan = "LESS_THAN",
  StartsWith = "STARTS_WITH",
  EndsWith = "ENDS_WITH",
  Contains = "CONTAINS",
  NotContains = "NOT_CONTAINS",
}
export enum CollectionSortOrder {
  Manual = "MANUAL",
  BestSelling = "BEST_SELLING",
  AlphaAsc = "ALPHA_ASC",
  AlphaDesc = "ALPHA_DESC",
  PriceDesc = "PRICE_DESC",
  PriceAsc = "PRICE_ASC",
  CreatedDesc = "CREATED_DESC",
  Created = "CREATED",
}
export enum NavigationItemV2Type {
  SalesChannel = "SALES_CHANNEL",
  PrimaryNavigation = "PRIMARY_NAVIGATION",
}
export enum AppSubscriptionBillingInterval {
  Every_30Days = "EVERY_30_DAYS",
}
export enum AppInstallationSortKeys {
  InstalledAt = "INSTALLED_AT",
  AppTitle = "APP_TITLE",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum AppInstallationCategory {
  Channel = "CHANNEL",
  PosEmbedded = "POS_EMBEDDED",
}
export enum AppInstallationPrivacy {
  Public = "PUBLIC",
  Private = "PRIVATE",
}
export enum DiscountFeature {
  Base = "BASE",
}
export enum DiscountStatus {
  Active = "ACTIVE",
  Expired = "EXPIRED",
  Scheduled = "SCHEDULED",
}
export enum SearchResultType {
  Order = "ORDER",
  Customer = "CUSTOMER",
  Product = "PRODUCT",
  OnlineStorePage = "ONLINE_STORE_PAGE",
  OnlineStoreBlog = "ONLINE_STORE_BLOG",
  OnlineStoreArticle = "ONLINE_STORE_ARTICLE",
  Collection = "COLLECTION",
  DraftOrder = "DRAFT_ORDER",
  PriceRule = "PRICE_RULE",
  AutomaticDiscount = "AUTOMATIC_DISCOUNT",
  MarketingActivity = "MARKETING_ACTIVITY",
  MarketingCampaign = "MARKETING_CAMPAIGN",
}
export enum LengthUnit {
  Millimeters = "MILLIMETERS",
  Centimeters = "CENTIMETERS",
  Meters = "METERS",
  Inches = "INCHES",
  Feet = "FEET",
  Yards = "YARDS",
}
export enum ShippingPackaging {
  Box = "BOX",
  FlatRate = "FLAT_RATE",
  Envelope = "ENVELOPE",
  SoftPack = "SOFT_PACK",
}
export enum CountryCode {
  Af = "AF",
  Ax = "AX",
  Al = "AL",
  Dz = "DZ",
  Ad = "AD",
  Ao = "AO",
  Ai = "AI",
  Ag = "AG",
  Ar = "AR",
  Am = "AM",
  Aw = "AW",
  Au = "AU",
  At = "AT",
  Az = "AZ",
  Bs = "BS",
  Bh = "BH",
  Bd = "BD",
  Bb = "BB",
  By = "BY",
  Be = "BE",
  Bz = "BZ",
  Bj = "BJ",
  Bm = "BM",
  Bt = "BT",
  Bo = "BO",
  Bq = "BQ",
  Ba = "BA",
  Bw = "BW",
  Bv = "BV",
  Br = "BR",
  Io = "IO",
  Bn = "BN",
  Bg = "BG",
  Bf = "BF",
  Bi = "BI",
  Kh = "KH",
  Ca = "CA",
  Cv = "CV",
  Ky = "KY",
  Cf = "CF",
  Td = "TD",
  Cl = "CL",
  Cn = "CN",
  Cx = "CX",
  Cc = "CC",
  Co = "CO",
  Km = "KM",
  Cg = "CG",
  Cd = "CD",
  Ck = "CK",
  Cr = "CR",
  Hr = "HR",
  Cu = "CU",
  Cw = "CW",
  Cy = "CY",
  Cz = "CZ",
  Ci = "CI",
  Dk = "DK",
  Dj = "DJ",
  Dm = "DM",
  Do = "DO",
  Ec = "EC",
  Eg = "EG",
  Sv = "SV",
  Gq = "GQ",
  Er = "ER",
  Ee = "EE",
  Et = "ET",
  Fk = "FK",
  Fo = "FO",
  Fj = "FJ",
  Fi = "FI",
  Fr = "FR",
  Gf = "GF",
  Pf = "PF",
  Tf = "TF",
  Ga = "GA",
  Gm = "GM",
  Ge = "GE",
  De = "DE",
  Gh = "GH",
  Gi = "GI",
  Gr = "GR",
  Gl = "GL",
  Gd = "GD",
  Gp = "GP",
  Gt = "GT",
  Gg = "GG",
  Gn = "GN",
  Gw = "GW",
  Gy = "GY",
  Ht = "HT",
  Hm = "HM",
  Va = "VA",
  Hn = "HN",
  Hk = "HK",
  Hu = "HU",
  Is = "IS",
  In = "IN",
  Id = "ID",
  Ir = "IR",
  Iq = "IQ",
  Ie = "IE",
  Im = "IM",
  Il = "IL",
  It = "IT",
  Jm = "JM",
  Jp = "JP",
  Je = "JE",
  Jo = "JO",
  Kz = "KZ",
  Ke = "KE",
  Ki = "KI",
  Kp = "KP",
  Xk = "XK",
  Kw = "KW",
  Kg = "KG",
  La = "LA",
  Lv = "LV",
  Lb = "LB",
  Ls = "LS",
  Lr = "LR",
  Ly = "LY",
  Li = "LI",
  Lt = "LT",
  Lu = "LU",
  Mo = "MO",
  Mk = "MK",
  Mg = "MG",
  Mw = "MW",
  My = "MY",
  Mv = "MV",
  Ml = "ML",
  Mt = "MT",
  Mq = "MQ",
  Mr = "MR",
  Mu = "MU",
  Yt = "YT",
  Mx = "MX",
  Md = "MD",
  Mc = "MC",
  Mn = "MN",
  Me = "ME",
  Ms = "MS",
  Ma = "MA",
  Mz = "MZ",
  Mm = "MM",
  Na = "NA",
  Nr = "NR",
  Np = "NP",
  Nl = "NL",
  An = "AN",
  Nc = "NC",
  Nz = "NZ",
  Ni = "NI",
  Ne = "NE",
  Ng = "NG",
  Nu = "NU",
  Nf = "NF",
  No = "NO",
  Om = "OM",
  Pk = "PK",
  Ps = "PS",
  Pa = "PA",
  Pg = "PG",
  Py = "PY",
  Pe = "PE",
  Ph = "PH",
  Pn = "PN",
  Pl = "PL",
  Pt = "PT",
  Qa = "QA",
  Cm = "CM",
  Re = "RE",
  Ro = "RO",
  Ru = "RU",
  Rw = "RW",
  Bl = "BL",
  Sh = "SH",
  Kn = "KN",
  Lc = "LC",
  Mf = "MF",
  Pm = "PM",
  Ws = "WS",
  Sm = "SM",
  St = "ST",
  Sa = "SA",
  Sn = "SN",
  Rs = "RS",
  Sc = "SC",
  Sl = "SL",
  Sg = "SG",
  Sx = "SX",
  Sk = "SK",
  Si = "SI",
  Sb = "SB",
  So = "SO",
  Za = "ZA",
  Gs = "GS",
  Kr = "KR",
  Ss = "SS",
  Es = "ES",
  Lk = "LK",
  Vc = "VC",
  Sd = "SD",
  Sr = "SR",
  Sj = "SJ",
  Sz = "SZ",
  Se = "SE",
  Ch = "CH",
  Sy = "SY",
  Tw = "TW",
  Tj = "TJ",
  Tz = "TZ",
  Th = "TH",
  Tl = "TL",
  Tg = "TG",
  Tk = "TK",
  To = "TO",
  Tt = "TT",
  Tn = "TN",
  Tr = "TR",
  Tm = "TM",
  Tc = "TC",
  Tv = "TV",
  Ug = "UG",
  Ua = "UA",
  Ae = "AE",
  Gb = "GB",
  Us = "US",
  Um = "UM",
  Uy = "UY",
  Uz = "UZ",
  Vu = "VU",
  Ve = "VE",
  Vn = "VN",
  Vg = "VG",
  Wf = "WF",
  Eh = "EH",
  Ye = "YE",
  Zm = "ZM",
  Zw = "ZW",
}
export enum EventSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export type FormattedString = string;
export enum ResourceAlertIcon {
  CheckmarkCircle = "CHECKMARK_CIRCLE",
  InformationCircle = "INFORMATION_CIRCLE",
}
export enum ResourceAlertSeverity {
  Default = "DEFAULT",
  Info = "INFO",
  Warning = "WARNING",
  Success = "SUCCESS",
  Critical = "CRITICAL",
  Error = "ERROR",
}
export interface ExchangeInput {
  autoFulfill?: boolean | null;
  checkoutLineItems: ExchangeCheckoutLineItemInput[];
  customerId?: string | null;
  deviceId?: string | null;
  discountCode?: string | null;
  locationId?: string | null;
  manualDiscount?: ExchangeDiscountInput | null;
  note?: string | null;
  refundLineItems: RefundLineItemInput[];
  refundShipping?: ShippingRefundInput | null;
  refundTransactions?: OrderTransactionInput[] | null;
  restock?: boolean | null;
  staffMemberId?: string | null;
  shippingAddress?: MailingAddressInput | null;
  shippingLine?: ExchangeCheckoutShippingLineInput | null;
  transactionGroupId?: string | null;
  sourceIdentifier?: string | null;
}
export interface ExchangeCheckoutLineItemInput {
  customAttributes?: AttributeInput[] | null;
  customGiftCard?: CustomGiftCardLineItemInput | null;
  disabledTaxes?: ExchangeCheckoutDisabledTaxInput[] | null;
  fulfillmentService?: string | null;
  quantity: number;
  quickSale?: QuickSaleLineItemInput | null;
  variant?: VariantLineItemInput | null;
  manualDiscount?: ExchangeDiscountInput | null;
  taxable?: boolean | null;
}
export interface AttributeInput {
  key: string;
  value: string;
}
export interface CustomGiftCardLineItemInput {
  giftCardProductId?: string | null;
  price: Decimal;
  title: string;
}
export interface ExchangeCheckoutDisabledTaxInput {
  rate: Decimal;
  title: string;
}
export interface QuickSaleLineItemInput {
  price?: Decimal | null;
  title?: string | null;
}
export interface VariantLineItemInput {
  variantId: string;
}
export interface ExchangeDiscountInput {
  description: string;
  value: Decimal;
}
export interface RefundLineItemInput {
  lineItemId: string;
  quantity: number;
  refundType?: RefundLineItemRefundType | null;
  restockType?: RefundLineItemRestockType | null;
  locationId?: string | null;
  removal?: boolean | null;
  fulfillmentLineItemId?: string | null;
}
export enum RefundLineItemRefundType {
  Return = "RETURN",
  Cancel = "CANCEL",
  LegacyRestock = "LEGACY_RESTOCK",
  NoRestock = "NO_RESTOCK",
}
export enum RefundLineItemRestockType {
  Return = "RETURN",
  Cancel = "CANCEL",
  LegacyRestock = "LEGACY_RESTOCK",
  NoRestock = "NO_RESTOCK",
}
export interface ShippingRefundInput {
  amount?: Money | null;
  fullRefund?: boolean | null;
}
export interface OrderTransactionInput {
  amount: Money;
  gateway: string;
  kind: OrderTransactionKind;
  orderId: string;
  parentId?: string | null;
}
export enum OrderTransactionKind {
  Sale = "SALE",
  Capture = "CAPTURE",
  Authorization = "AUTHORIZATION",
  Void = "VOID",
  Refund = "REFUND",
  Change = "CHANGE",
  EmvAuthorization = "EMV_AUTHORIZATION",
  SuggestedRefund = "SUGGESTED_REFUND",
}
export interface MailingAddressInput {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  company?: string | null;
  country?: string | null;
  countryCode?: CountryCode | null;
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  phone?: string | null;
  province?: string | null;
  provinceCode?: string | null;
  zip?: string | null;
}
export interface ExchangeCheckoutShippingLineInput {
  customTaxLines?: ExchangeCheckoutTaxLineInput[] | null;
  price: Decimal;
  title: string;
}
export interface ExchangeCheckoutTaxLineInput {
  price: Decimal;
  rate: Decimal;
  title: string;
}
export enum DiscountApplicationAllocationMethod {
  Across = "ACROSS",
  Each = "EACH",
  One = "ONE",
}
export enum DiscountApplicationTargetSelection {
  All = "ALL",
  Entitled = "ENTITLED",
  Explicit = "EXPLICIT",
}
export enum DiscountApplicationTargetType {
  LineItem = "LINE_ITEM",
  ShippingLine = "SHIPPING_LINE",
}
export enum StaffMemberDefaultImage {
  Default = "DEFAULT",
  Transparent = "TRANSPARENT",
  NotFound = "NOT_FOUND",
}
export enum ActivityTopic {
  Products = "PRODUCTS",
  Payments = "PAYMENTS",
  OnlineStore = "ONLINE_STORE",
  Collections = "COLLECTIONS",
  Blogs = "BLOGS",
  Apps = "APPS",
  Merchant = "MERCHANT",
  Domains = "DOMAINS",
  Script = "SCRIPT",
  Pages = "PAGES",
  Default = "DEFAULT",
}
export enum HomeCardLayout {
  Simple = "SIMPLE",
  Announcement = "ANNOUNCEMENT",
  Achievement = "ACHIEVEMENT",
  Content = "CONTENT",
  LineGraph = "LINE_GRAPH",
  Table = "TABLE",
  StackableTable = "STACKABLE_TABLE",
  QuestionScale = "QUESTION_SCALE",
  QuestionDropdown = "QUESTION_DROPDOWN",
  Countdown = "COUNTDOWN",
  Video = "VIDEO",
  ActionList = "ACTION_LIST",
  FeaturedAnnouncement = "FEATURED_ANNOUNCEMENT",
  Comparison = "COMPARISON",
  BookmarkCard = "BOOKMARK_CARD",
  Blog = "BLOG",
  Progress = "PROGRESS",
  GoalIntro = "GOAL_INTRO",
  Action = "ACTION",
  GoalProgress = "GOAL_PROGRESS",
  GoalTracking = "GOAL_TRACKING",
  GoalComplete = "GOAL_COMPLETE",
  BfcmCountdown = "BFCM_COUNTDOWN",
}
export enum HomeCardAction {
  Visit = "VISIT",
  Post = "POST",
  Patch = "PATCH",
  OpenSupportChat = "OPEN_SUPPORT_CHAT",
  OpenIntercomChat = "OPEN_INTERCOM_CHAT",
  Email = "EMAIL",
  Telephone = "TELEPHONE",
  Dismiss = "DISMISS",
  SubmitFeedback = "SUBMIT_FEEDBACK",
  Share = "SHARE",
  Disclosure = "DISCLOSURE",
}
export enum HomeBadge {
  Bfcm = "BFCM",
  Holidays = "HOLIDAYS",
}
export enum HomeCardFeedbackIntent {
  Positive = "POSITIVE",
  Negative = "NEGATIVE",
  Neutral = "NEUTRAL",
}
export enum HomeContentType {
  Svg = "SVG",
  Png = "PNG",
}
export enum HomeImageType {
  Default = "DEFAULT",
  Product = "PRODUCT",
  Customer = "CUSTOMER",
}
export enum InsightPeriod {
  SevenDays = "SEVEN_DAYS",
  ThirtyDays = "THIRTY_DAYS",
}
export enum InsightActionType {
  Visit = "VISIT",
}
export enum HomeNotificationSeverity {
  Trial = "TRIAL",
  Alert = "ALERT",
  Warning = "WARNING",
  Positive = "POSITIVE",
  Info = "INFO",
}
export enum StaffMemberPermission {
  Applications = "APPLICATIONS",
  Channels = "CHANNELS",
  Customers = "CUSTOMERS",
  Dashboard = "DASHBOARD",
  Domains = "DOMAINS",
  DraftOrders = "DRAFT_ORDERS",
  ExportCustomers = "EXPORT_CUSTOMERS",
  ExportDraftOrders = "EXPORT_DRAFT_ORDERS",
  ExportOrders = "EXPORT_ORDERS",
  ExportProducts = "EXPORT_PRODUCTS",
  Full = "FULL",
  GiftCards = "GIFT_CARDS",
  Links = "LINKS",
  Locations = "LOCATIONS",
  Marketing = "MARKETING",
  MarketingSection = "MARKETING_SECTION",
  Orders = "ORDERS",
  Overviews = "OVERVIEWS",
  Pages = "PAGES",
  Preferences = "PREFERENCES",
  Products = "PRODUCTS",
  Reports = "REPORTS",
  Themes = "THEMES",
}
export enum HomeTaskBadgeStatus {
  Info = "INFO",
  Warning = "WARNING",
  Success = "SUCCESS",
  Attention = "ATTENTION",
}
export enum SuggestedOrderTransactionKind {
  SuggestedRefund = "SUGGESTED_REFUND",
}
export enum OrderTransactionErrorCode {
  IncorrectNumber = "INCORRECT_NUMBER",
  InvalidNumber = "INVALID_NUMBER",
  InvalidExpiryDate = "INVALID_EXPIRY_DATE",
  InvalidCvc = "INVALID_CVC",
  ExpiredCard = "EXPIRED_CARD",
  IncorrectCvc = "INCORRECT_CVC",
  IncorrectZip = "INCORRECT_ZIP",
  IncorrectAddress = "INCORRECT_ADDRESS",
  IncorrectPin = "INCORRECT_PIN",
  CardDeclined = "CARD_DECLINED",
  ProcessingError = "PROCESSING_ERROR",
  CallIssuer = "CALL_ISSUER",
  PickUpCard = "PICK_UP_CARD",
  ConfigError = "CONFIG_ERROR",
  TestModeLiveCard = "TEST_MODE_LIVE_CARD",
  UnsupportedFeature = "UNSUPPORTED_FEATURE",
  GenericError = "GENERIC_ERROR",
  InvalidCountry = "INVALID_COUNTRY",
  InvalidAmount = "INVALID_AMOUNT",
  PaymentMethodUnavailable = "PAYMENT_METHOD_UNAVAILABLE",
  AmazonPaymentsInvalidPaymentMethod = "AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD",
  AmazonPaymentsMaxAmountCharged = "AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED",
  AmazonPaymentsMaxAmountRefunded = "AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED",
  AmazonPaymentsMaxAuthorizationsCaptured = "AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED",
  AmazonPaymentsMaxRefundsProcessed = "AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED",
  AmazonPaymentsOrderReferenceCanceled = "AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED",
  AmazonPaymentsStale = "AMAZON_PAYMENTS_STALE",
}
export enum PaymentMethods {
  Visa = "VISA",
  Mastercard = "MASTERCARD",
  Discover = "DISCOVER",
  AmericanExpress = "AMERICAN_EXPRESS",
  DinersClub = "DINERS_CLUB",
  Jcb = "JCB",
  Dankort = "DANKORT",
  Maestro = "MAESTRO",
  Forbrugsforeningen = "FORBRUGSFORENINGEN",
  Paypal = "PAYPAL",
  Bogus = "BOGUS",
  Bitcoin = "BITCOIN",
  Litecoin = "LITECOIN",
  Dogecoin = "DOGECOIN",
}
export enum PaymentMethodType {
  CreditCard = "CREDIT_CARD",
  Wallet = "WALLET",
  Lpm = "LPM",
}
export enum ProviderGroup {
  Other = "OTHER",
  Paypal = "PAYPAL",
  Alternative = "ALTERNATIVE",
  Manual = "MANUAL",
  Custom = "CUSTOM",
  AmazonPayments = "AMAZON_PAYMENTS",
  Google = "GOOGLE",
  Wallet = "WALLET",
  GiftCard = "GIFT_CARD",
  PosOnly = "POS_ONLY",
}
export enum RateDifferentiator {
  DomesticOnline = "DOMESTIC_ONLINE",
  DomesticCardPresent = "DOMESTIC_CARD_PRESENT",
  InternationalOnline = "INTERNATIONAL_ONLINE",
  InternationalCardPresent = "INTERNATIONAL_CARD_PRESENT",
}
export enum OrderTransactionStatus {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
  Error = "ERROR",
  AwaitingResponse = "AWAITING_RESPONSE",
}
export enum ExchangeType {
  LikeForLike = "LIKE_FOR_LIKE",
  BalanceOwedToMerchant = "BALANCE_OWED_TO_MERCHANT",
  BalanceOwedToCustomer = "BALANCE_OWED_TO_CUSTOMER",
}
export enum ExchangeErrorCode {
  ExchangeCheckoutAlreadyCompleted = "EXCHANGE_CHECKOUT_ALREADY_COMPLETED",
  ExchangeCreditGreaterThanCheckoutPrice = "EXCHANGE_CREDIT_GREATER_THAN_CHECKOUT_PRICE",
  ExchangeNotFound = "EXCHANGE_NOT_FOUND",
  ExchangeNotReadyToComplete = "EXCHANGE_NOT_READY_TO_COMPLETE",
  ExchangeParentOrderIsLocked = "EXCHANGE_PARENT_ORDER_IS_LOCKED",
  Checkout = "CHECKOUT",
  CheckoutBillingAddressBlank = "CHECKOUT_BILLING_ADDRESS_BLANK",
  CheckoutDiscount = "CHECKOUT_DISCOUNT",
  CheckoutLineItem = "CHECKOUT_LINE_ITEM",
  CheckoutLineItemInvalidSpecification = "CHECKOUT_LINE_ITEM_INVALID_SPECIFICATION",
  CheckoutOrderContainsDiscountCodeAndManualDiscount = "CHECKOUT_ORDER_CONTAINS_DISCOUNT_CODE_AND_MANUAL_DISCOUNT",
  RefundLineItem = "REFUND_LINE_ITEM",
  RefundLineItemBlank = "REFUND_LINE_ITEM_BLANK",
  RefundLineItemNotFulfilled = "REFUND_LINE_ITEM_NOT_FULFILLED",
  CheckoutDiscountCodeNotApplicable = "CHECKOUT_DISCOUNT_CODE_NOT_APPLICABLE",
  RefundShipping = "REFUND_SHIPPING",
  CheckoutDiscountCodeNotFound = "CHECKOUT_DISCOUNT_CODE_NOT_FOUND",
  RefundShippingCannotBeNegative = "REFUND_SHIPPING_CANNOT_BE_NEGATIVE",
  CheckoutDiscountCodeDepleted = "CHECKOUT_DISCOUNT_CODE_DEPLETED",
  RefundMissingTransactions = "REFUND_MISSING_TRANSACTIONS",
  RefundTransaction = "REFUND_TRANSACTION",
  RefundShippingMoreThanRemaining = "REFUND_SHIPPING_MORE_THAN_REMAINING",
  RefundTransactionsNil = "REFUND_TRANSACTIONS_NIL",
  PaymentExchangeCredit = "PAYMENT_EXCHANGE_CREDIT",
  PaymentUniqueTokenNotSpecified = "PAYMENT_UNIQUE_TOKEN_NOT_SPECIFIED",
  Refund = "REFUND",
  ReceiptRecipientUnreachable = "RECEIPT_RECIPIENT_UNREACHABLE",
  ReceiptRequiresEmailOrPhone = "RECEIPT_REQUIRES_EMAIL_OR_PHONE",
  ReceiptRecipientInvalidEmailAddress = "RECEIPT_RECIPIENT_INVALID_EMAIL_ADDRESS",
  ReceiptRecipientInvalidPhoneNumber = "RECEIPT_RECIPIENT_INVALID_PHONE_NUMBER",
  ExchangeAlreadyCompleted = "EXCHANGE_ALREADY_COMPLETED",
}
export enum OrderCancelReason {
  Customer = "CUSTOMER",
  Fraud = "FRAUD",
  Inventory = "INVENTORY",
  Declined = "DECLINED",
  Other = "OTHER",
}
export enum MarketingChannel {
  Search = "SEARCH",
  Display = "DISPLAY",
  Social = "SOCIAL",
  Email = "EMAIL",
  Referral = "REFERRAL",
}
export enum MarketingTactic {
  AbandonedCart = "ABANDONED_CART",
  Ad = "AD",
  Affiliate = "AFFILIATE",
  Link = "LINK",
  Loyalty = "LOYALTY",
  Message = "MESSAGE",
  Newsletter = "NEWSLETTER",
  Notification = "NOTIFICATION",
  Post = "POST",
  Retargeting = "RETARGETING",
  Transactional = "TRANSACTIONAL",
  Seo = "SEO",
  Direct = "DIRECT",
  StorefrontApp = "STOREFRONT_APP",
  Display = "DISPLAY",
  Search = "SEARCH",
  FollowUp = "FOLLOW_UP",
  Receipt = "RECEIPT",
}
export enum OrderDisplayFinancialStatus {
  Pending = "PENDING",
  Authorized = "AUTHORIZED",
  PartiallyPaid = "PARTIALLY_PAID",
  PartiallyRefunded = "PARTIALLY_REFUNDED",
  Voided = "VOIDED",
  Paid = "PAID",
  Refunded = "REFUNDED",
}
export enum OrderDisplayFulfillmentStatus {
  Unfulfilled = "UNFULFILLED",
  PartiallyFulfilled = "PARTIALLY_FULFILLED",
  Fulfilled = "FULFILLED",
  Restocked = "RESTOCKED",
  PendingFulfillment = "PENDING_FULFILLMENT",
  Open = "OPEN",
}
export enum DisputeType {
  Chargeback = "CHARGEBACK",
  Inquiry = "INQUIRY",
}
export enum DisputeStatus {
  NeedsResponse = "NEEDS_RESPONSE",
  UnderReview = "UNDER_REVIEW",
  ChargeRefunded = "CHARGE_REFUNDED",
  Accepted = "ACCEPTED",
  Won = "WON",
  Lost = "LOST",
}
export enum FulfillmentDisplayStatus {
  AttemptedDelivery = "ATTEMPTED_DELIVERY",
  Canceled = "CANCELED",
  Confirmed = "CONFIRMED",
  Delivered = "DELIVERED",
  Failure = "FAILURE",
  Fulfilled = "FULFILLED",
  InTransit = "IN_TRANSIT",
  LabelPrinted = "LABEL_PRINTED",
  LabelPurchased = "LABEL_PURCHASED",
  LabelVoided = "LABEL_VOIDED",
  MarkedAsFulfilled = "MARKED_AS_FULFILLED",
  NotDelivered = "NOT_DELIVERED",
  OutForDelivery = "OUT_FOR_DELIVERY",
  ReadyForPickup = "READY_FOR_PICKUP",
  Submitted = "SUBMITTED",
}
export enum FulfillmentEventSortKeys {
  HappenedAt = "HAPPENED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum FulfillmentEventStatus {
  LabelPurchased = "LABEL_PURCHASED",
  LabelPrinted = "LABEL_PRINTED",
  ReadyForPickup = "READY_FOR_PICKUP",
  Confirmed = "CONFIRMED",
  InTransit = "IN_TRANSIT",
  OutForDelivery = "OUT_FOR_DELIVERY",
  AttemptedDelivery = "ATTEMPTED_DELIVERY",
  Delivered = "DELIVERED",
  Failure = "FAILURE",
}
export enum FulfillmentStatus {
  Pending = "PENDING",
  Open = "OPEN",
  Success = "SUCCESS",
  Cancelled = "CANCELLED",
  Error = "ERROR",
  Failure = "FAILURE",
}
export enum FulfillmentSortKeys {
  CreatedAt = "CREATED_AT",
  EstimatedDeliveryAt = "ESTIMATED_DELIVERY_AT",
  Id = "ID",
  TrackingCompany = "TRACKING_COMPANY",
  OrderNumber = "ORDER_NUMBER",
  ShipmentStatus = "SHIPMENT_STATUS",
  Relevance = "RELEVANCE",
}
export enum OrderRiskLevel {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
}
export interface MoneyInput {
  amount: Decimal;
  currencyCode: CurrencyCode;
}
export enum OrderSortKeys {
  OrderNumber = "ORDER_NUMBER",
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  FinancialStatus = "FINANCIAL_STATUS",
  FulfillmentStatus = "FULFILLMENT_STATUS",
  TotalPrice = "TOTAL_PRICE",
  CustomerName = "CUSTOMER_NAME",
  ProcessedAt = "PROCESSED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum CustomerState {
  Declined = "DECLINED",
  Disabled = "DISABLED",
  Enabled = "ENABLED",
  Invited = "INVITED",
}
export enum CustomerSavedSearchSortKeys {
  Name = "NAME",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum CustomerSortKeys {
  Name = "NAME",
  Location = "LOCATION",
  OrdersCount = "ORDERS_COUNT",
  LastOrderDate = "LAST_ORDER_DATE",
  TotalSpent = "TOTAL_SPENT",
  UpdatedAt = "UPDATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum DeletionEventSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum DeletionEventSubjectType {
  Collection = "COLLECTION",
  Product = "PRODUCT",
}
export enum DeliveryConditionOperator {
  EqualTo = "EQUAL_TO",
  NotEqualTo = "NOT_EQUAL_TO",
  GreaterThan = "GREATER_THAN",
  GreaterThanOrEqualTo = "GREATER_THAN_OR_EQUAL_TO",
  LessThan = "LESS_THAN",
  LessThanOrEqualTo = "LESS_THAN_OR_EQUAL_TO",
}
export enum DnsRecordType {
  A = "A",
  Aaaa = "AAAA",
  Cname = "CNAME",
  Mx = "MX",
  Nameserver = "NAMESERVER",
  Srv = "SRV",
  Txt = "TXT",
}
export enum DraftOrderAppliedDiscountType {
  FixedAmount = "FIXED_AMOUNT",
  Percentage = "PERCENTAGE",
}
export enum DraftOrderStatus {
  Completed = "COMPLETED",
  InvoiceSent = "INVOICE_SENT",
  Open = "OPEN",
}
export enum DraftOrderSortKeys {
  Number = "NUMBER",
  UpdatedAt = "UPDATED_AT",
  Status = "STATUS",
  TotalPrice = "TOTAL_PRICE",
  CustomerName = "CUSTOMER_NAME",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum LocationSortKeys {
  Name = "NAME",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum MarketingActivitySortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum MarketingActivityExtensionAppErrorCode {
  NotOnboardedError = "NOT_ONBOARDED_ERROR",
  ValidationError = "VALIDATION_ERROR",
  ApiError = "API_ERROR",
  PlatformError = "PLATFORM_ERROR",
}
export enum MarketingBudgetBudgetType {
  Daily = "DAILY",
  Lifetime = "LIFETIME",
}
export enum MarketingActivityPreviewType {
  Desktop = "DESKTOP",
  Mobile = "MOBILE",
}
export enum MarketingActivityPreviewMimeType {
  TextHtml = "TEXT_HTML",
  ImageJpeg = "IMAGE_JPEG",
  ImagePng = "IMAGE_PNG",
}
export enum MarketingPlatform {
  Facebook = "FACEBOOK",
  Instagram = "INSTAGRAM",
  Google = "GOOGLE",
  Pinterest = "PINTEREST",
  Bing = "BING",
  Email = "EMAIL",
}
export enum MarketingActivityStatus {
  Paused = "PAUSED",
  Scheduled = "SCHEDULED",
  Undefined = "UNDEFINED",
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
  Failed = "FAILED",
  Deleted = "DELETED",
}
export enum MarketingActivityCreationItemType {
  Extension = "EXTENSION",
  NonOnboardedApp = "NON_ONBOARDED_APP",
  NonInstalledApp = "NON_INSTALLED_APP",
}
export enum MarketingCampaignSuggestionItemType {
  MarketingHoliday = "MARKETING_HOLIDAY",
}
export enum MarketingCampaignSortKeys {
  Title = "TITLE",
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum MarketingRecommendationType {
  Education = "EDUCATION",
  AppInstall = "APP_INSTALL",
  SmartAction = "SMART_ACTION",
  QuickAction = "QUICK_ACTION",
}
export enum OnlineStoreTemplateResourceType {
  Article = "ARTICLE",
  Blog = "BLOG",
  Collection = "COLLECTION",
  GiftCard = "GIFT_CARD",
  Page = "PAGE",
  Product = "PRODUCT",
}
export type LiquidHTML = string;
export enum PaymentProcessingMethod {
  Manual = "MANUAL",
  Auto = "AUTO",
}
export enum PriceRuleAllocationMethod {
  Each = "EACH",
  Across = "ACROSS",
}
export enum DiscountCodeSortKeys {
  Code = "CODE",
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum PriceRuleFeature {
  BuyOneGetOne = "BUY_ONE_GET_ONE",
  BuyOneGetOneWithAllocationLimit = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT",
  Bulk = "BULK",
  SpecificCustomers = "SPECIFIC_CUSTOMERS",
  QuantityDiscounts = "QUANTITY_DISCOUNTS",
}
export enum PriceRuleShareableUrlTargetType {
  Home = "HOME",
  Product = "PRODUCT",
  Collection = "COLLECTION",
}
export enum PriceRuleStatus {
  Active = "ACTIVE",
  Expired = "EXPIRED",
  Scheduled = "SCHEDULED",
}
export enum PriceRuleTarget {
  LineItem = "LINE_ITEM",
  ShippingLine = "SHIPPING_LINE",
}
export enum PriceRuleTrait {
  BuyOneGetOne = "BUY_ONE_GET_ONE",
  BuyOneGetOneWithAllocationLimit = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT",
  Bulk = "BULK",
  SpecificCustomers = "SPECIFIC_CUSTOMERS",
  QuantityDiscounts = "QUANTITY_DISCOUNTS",
}
export enum PriceRuleSortKeys {
  StartsAt = "STARTS_AT",
  EndsAt = "ENDS_AT",
  Title = "TITLE",
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum ProductSortKeys {
  Title = "TITLE",
  ProductType = "PRODUCT_TYPE",
  Vendor = "VENDOR",
  InventoryTotal = "INVENTORY_TOTAL",
  UpdatedAt = "UPDATED_AT",
  CreatedAt = "CREATED_AT",
  PublishedAt = "PUBLISHED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum ResourceType {
  Orders = "ORDERS",
  DraftOrders = "DRAFT_ORDERS",
  Products = "PRODUCTS",
  Variants = "VARIANTS",
  Collections = "COLLECTIONS",
  Pages = "PAGES",
  Blogs = "BLOGS",
  Articles = "ARTICLES",
  Customers = "CUSTOMERS",
  PriceRules = "PRICE_RULES",
  AbandonedCheckouts = "ABANDONED_CHECKOUTS",
  Apps = "APPS",
  MarketingCampaigns = "MARKETING_CAMPAIGNS",
  MarketingActivities = "MARKETING_ACTIVITIES",
  ExternalMarketingActivities = "EXTERNAL_MARKETING_ACTIVITIES",
  MarketingActivityReports = "MARKETING_ACTIVITY_REPORTS",
  MarketingSummary = "MARKETING_SUMMARY",
  Checkouts = "CHECKOUTS",
  Discounts = "DISCOUNTS",
  Marketing = "MARKETING",
}
export enum DeliveryLabelPurchaseErrorClassification {
  CustomsLines = "CUSTOMS_LINES",
  LineItems = "LINE_ITEMS",
  Base = "BASE",
  PackageAndWeight = "PACKAGE_AND_WEIGHT",
  ShippingAddress = "SHIPPING_ADDRESS",
}
export enum ScriptTagDisplayScope {
  All = "ALL",
  OrderStatus = "ORDER_STATUS",
  OnlineStore = "ONLINE_STORE",
}
export enum ResourceLocation {
  Action = "ACTION",
  Index = "INDEX",
  Show = "SHOW",
  New = "NEW",
}
export enum ShopTemplateResource {
  Product = "PRODUCT",
  GiftCard = "GIFT_CARD",
}
export enum ShopCustomerAccountsSetting {
  Required = "REQUIRED",
  Optional = "OPTIONAL",
  Disabled = "DISABLED",
}
export enum ShopBranding {
  ShopifyGold = "SHOPIFY_GOLD",
  ShopifyPlus = "SHOPIFY_PLUS",
  Rogers = "ROGERS",
  Shopify = "SHOPIFY",
}
export type Date = string;
export enum AppsSortKeys {
  Title = "TITLE",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum ShopMilestone {
  SetupPaymentsGateway = "SETUP_PAYMENTS_GATEWAY",
  SetupShipping = "SETUP_SHIPPING",
  SetupTax = "SETUP_TAX",
  SetupUnlockStore = "SETUP_UNLOCK_STORE",
  SetupImportStore = "SETUP_IMPORT_STORE",
}
export enum MarketingEventSortKeys {
  StartedAt = "STARTED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum DigitalWallet {
  ApplePay = "APPLE_PAY",
  AndroidPay = "ANDROID_PAY",
  GooglePay = "GOOGLE_PAY",
  ShopifyPay = "SHOPIFY_PAY",
}
export enum PosLinkResourceType {
  Carts = "CARTS",
  Orders = "ORDERS",
}
export enum PosLinkResourceLocation {
  Edit = "EDIT",
  Complete = "COMPLETE",
}
export enum PosLinkLayout {
  Modal = "MODAL",
  Fullscreen = "FULLSCREEN",
}
export enum ShopifyPaymentsPayoutTransactionType {
  Deposit = "DEPOSIT",
  Withdrawal = "WITHDRAWAL",
}
export enum ShopifyPaymentsPayoutStatus {
  Scheduled = "SCHEDULED",
  InTransit = "IN_TRANSIT",
  Paid = "PAID",
  Failed = "FAILED",
  Canceled = "CANCELED",
}
export enum ShopifyPaymentsBankAccountStatus {
  New = "NEW",
  Validated = "VALIDATED",
  Verified = "VERIFIED",
  Errored = "ERRORED",
}
export enum ShopImageSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum ChatEventOriginTag {
  OriginPlus = "ORIGIN_PLUS",
  OriginPlusSegmented = "ORIGIN_PLUS_SEGMENTED",
}
export enum TaxOverrideZoneType {
  Country = "COUNTRY",
  Province = "PROVINCE",
  State = "STATE",
  County = "COUNTY",
  City = "CITY",
}
export enum WebhookSubscriptionFormat {
  Json = "JSON",
  Xml = "XML",
}
export enum WebhookSubscriptionTopic {
  AppUninstalled = "APP_UNINSTALLED",
  CartsCreate = "CARTS_CREATE",
  CartsUpdate = "CARTS_UPDATE",
  ChannelsDelete = "CHANNELS_DELETE",
  CheckoutsCreate = "CHECKOUTS_CREATE",
  CheckoutsDelete = "CHECKOUTS_DELETE",
  CheckoutsUpdate = "CHECKOUTS_UPDATE",
  CollectionListingsAdd = "COLLECTION_LISTINGS_ADD",
  CollectionListingsRemove = "COLLECTION_LISTINGS_REMOVE",
  CollectionListingsUpdate = "COLLECTION_LISTINGS_UPDATE",
  CollectionPublicationsCreate = "COLLECTION_PUBLICATIONS_CREATE",
  CollectionPublicationsDelete = "COLLECTION_PUBLICATIONS_DELETE",
  CollectionPublicationsUpdate = "COLLECTION_PUBLICATIONS_UPDATE",
  CollectionsCreate = "COLLECTIONS_CREATE",
  CollectionsDelete = "COLLECTIONS_DELETE",
  CollectionsUpdate = "COLLECTIONS_UPDATE",
  CustomerGroupsCreate = "CUSTOMER_GROUPS_CREATE",
  CustomerGroupsDelete = "CUSTOMER_GROUPS_DELETE",
  CustomerGroupsUpdate = "CUSTOMER_GROUPS_UPDATE",
  CustomersCreate = "CUSTOMERS_CREATE",
  CustomersDelete = "CUSTOMERS_DELETE",
  CustomersDisable = "CUSTOMERS_DISABLE",
  CustomersEnable = "CUSTOMERS_ENABLE",
  CustomersUpdate = "CUSTOMERS_UPDATE",
  DisputesCreate = "DISPUTES_CREATE",
  DisputesUpdate = "DISPUTES_UPDATE",
  DraftOrdersCreate = "DRAFT_ORDERS_CREATE",
  DraftOrdersDelete = "DRAFT_ORDERS_DELETE",
  DraftOrdersUpdate = "DRAFT_ORDERS_UPDATE",
  FulfillmentEventsCreate = "FULFILLMENT_EVENTS_CREATE",
  FulfillmentEventsDelete = "FULFILLMENT_EVENTS_DELETE",
  FulfillmentsCreate = "FULFILLMENTS_CREATE",
  FulfillmentsUpdate = "FULFILLMENTS_UPDATE",
  AttributedSessionsFirst = "ATTRIBUTED_SESSIONS_FIRST",
  AttributedSessionsLast = "ATTRIBUTED_SESSIONS_LAST",
  OrderTransactionsCreate = "ORDER_TRANSACTIONS_CREATE",
  OrdersCancelled = "ORDERS_CANCELLED",
  OrdersCreate = "ORDERS_CREATE",
  OrdersDelete = "ORDERS_DELETE",
  OrdersFulfilled = "ORDERS_FULFILLED",
  OrdersPaid = "ORDERS_PAID",
  OrdersPartiallyFulfilled = "ORDERS_PARTIALLY_FULFILLED",
  OrdersUpdated = "ORDERS_UPDATED",
  ProductListingsAdd = "PRODUCT_LISTINGS_ADD",
  ProductListingsRemove = "PRODUCT_LISTINGS_REMOVE",
  ProductListingsUpdate = "PRODUCT_LISTINGS_UPDATE",
  ProductPublicationsCreate = "PRODUCT_PUBLICATIONS_CREATE",
  ProductPublicationsDelete = "PRODUCT_PUBLICATIONS_DELETE",
  ProductPublicationsUpdate = "PRODUCT_PUBLICATIONS_UPDATE",
  ProductsCreate = "PRODUCTS_CREATE",
  ProductsDelete = "PRODUCTS_DELETE",
  ProductsUpdate = "PRODUCTS_UPDATE",
  RefundsCreate = "REFUNDS_CREATE",
  ShippingAddressesCreate = "SHIPPING_ADDRESSES_CREATE",
  ShippingAddressesUpdate = "SHIPPING_ADDRESSES_UPDATE",
  ShopUpdate = "SHOP_UPDATE",
  TaxServicesCreate = "TAX_SERVICES_CREATE",
  TaxServicesUpdate = "TAX_SERVICES_UPDATE",
  ThemesCreate = "THEMES_CREATE",
  ThemesDelete = "THEMES_DELETE",
  ThemesPublish = "THEMES_PUBLISH",
  ThemesUpdate = "THEMES_UPDATE",
  VariantsInStock = "VARIANTS_IN_STOCK",
  VariantsOutOfStock = "VARIANTS_OUT_OF_STOCK",
  InventoryLevelsConnect = "INVENTORY_LEVELS_CONNECT",
  InventoryLevelsUpdate = "INVENTORY_LEVELS_UPDATE",
  InventoryLevelsDisconnect = "INVENTORY_LEVELS_DISCONNECT",
  AttributionRisk = "ATTRIBUTION_RISK",
  InventoryItemsCreate = "INVENTORY_ITEMS_CREATE",
  InventoryItemsUpdate = "INVENTORY_ITEMS_UPDATE",
  InventoryItemsDelete = "INVENTORY_ITEMS_DELETE",
  LocationsCreate = "LOCATIONS_CREATE",
  LocationsUpdate = "LOCATIONS_UPDATE",
  LocationsDelete = "LOCATIONS_DELETE",
}
export enum WebhookSubscriptionSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export interface AdminGenerateLoginTokenInput {
  clientMutationId?: string | null;
}
export enum AnalyticsFeedbackSubmitKey {
  Useful = "USEFUL",
  NotUseful = "NOT_USEFUL",
}
export enum InsightsInteractionSource {
  Overview = "OVERVIEW",
  ViewAll = "VIEW_ALL",
}
export interface AppInstallInput {
  id: string;
}
export interface AppUninstallInput {
  id: string;
  feedback?: string | null;
}
export enum ResourceExportableType {
  Orders = "ORDERS",
  Products = "PRODUCTS",
  PriceRules = "PRICE_RULES",
}
export enum ExportFormat {
  ExcelCsv = "EXCEL_CSV",
  PlainCsv = "PLAIN_CSV",
}
export interface CollectionInput {
  descriptionHtml?: string | null;
  handle?: string | null;
  id?: string | null;
  image?: ImageInput | null;
  products?: string[] | null;
  publications?: CollectionPublicationInput[] | null;
  ruleSet?: CollectionRuleSetInput | null;
  templateSuffix?: string | null;
  sortOrder?: CollectionSortOrder | null;
  title?: string | null;
  seo?: SEOInput | null;
  redirectNewHandle?: boolean | null;
}
export interface ImageInput {
  id?: string | null;
  altText?: string | null;
  src?: string | null;
}
export interface CollectionPublicationInput {
  publicationId?: string | null;
  channelId?: string | null;
  channelHandle?: string | null;
}
export interface CollectionRuleSetInput {
  appliedDisjunctively: boolean;
  rules?: CollectionRuleInput[] | null;
}
export interface CollectionRuleInput {
  column: CollectionRuleColumn;
  relation: CollectionRuleRelation;
  condition: string;
}
export interface SEOInput {
  title?: string | null;
  description?: string | null;
}
export interface CollectionDeleteInput {
  id: string;
}
export interface CollectionPublishInput {
  id: string;
  collectionPublications: CollectionPublicationInput[];
}
export interface MoveInput {
  id: string;
  newPosition: UnsignedInt64;
}
export interface CollectionUnpublishInput {
  id: string;
  collectionPublications: CollectionPublicationInput[];
}
export interface CustomFulfillmentServiceCreateInput {
  name: string;
  email: string;
}
export interface DeliveryCustomShippingPackagingInput {
  weight: WeightInput;
  dimensions: ObjectDimensionsInput;
  default?: boolean | null;
  name: string;
  type: ShippingPackaging;
}
export interface WeightInput {
  value: number;
  unit: WeightUnit;
}
export interface ObjectDimensionsInput {
  length: number;
  width: number;
  height: number;
  unit: LengthUnit;
}
export interface CustomerInput {
  acceptsMarketing?: boolean | null;
  addresses?: MailingAddressInput[] | null;
  email?: string | null;
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  metafields?: MetafieldInput[] | null;
  note?: string | null;
  phone?: string | null;
  tags?: string[] | null;
  taxExempt?: boolean | null;
}
export interface MetafieldInput {
  description?: string | null;
  id?: string | null;
  key?: string | null;
  namespace?: string | null;
  value?: string | null;
  valueType?: MetafieldValueType | null;
}
export interface CustomerDeleteInput {
  id: string;
}
export interface MutationsDeviceAttributesReportInput {
  canvasFingerprint: string;
  hasCookies: boolean;
  fonts: string[];
  lang?: string | null;
  hasLocalStorage: boolean;
  plugins: string[];
  screen?: string | null;
  hasSessionStorage: boolean;
  tzOffset?: number | null;
  userAgent?: string | null;
}
export enum DiscountErrorCode {
  Blank = "BLANK",
  Present = "PRESENT",
  EqualTo = "EQUAL_TO",
  GreaterThan = "GREATER_THAN",
  Invalid = "INVALID",
  LessThanOrEqualTo = "LESS_THAN_OR_EQUAL_TO",
  Taken = "TAKEN",
  TooLong = "TOO_LONG",
  TooShort = "TOO_SHORT",
  InternalError = "INTERNAL_ERROR",
  ValueOutsideRange = "VALUE_OUTSIDE_RANGE",
  ExceededMax = "EXCEEDED_MAX",
  EndDateBeforeStartDate = "END_DATE_BEFORE_START_DATE",
  ExceededMaxNumberOfDiscount = "EXCEEDED_MAX_NUMBER_OF_DISCOUNT",
  ExceededMaxCollection = "EXCEEDED_MAX_COLLECTION",
  ExceededMaxProduct = "EXCEEDED_MAX_PRODUCT",
  DuplicateCollection = "DUPLICATE_COLLECTION",
  ExceededMaxVariant = "EXCEEDED_MAX_VARIANT",
  DuplicateProduct = "DUPLICATE_PRODUCT",
  VariantAlreadySelectedThroughProduct = "VARIANT_ALREADY_SELECTED_THROUGH_PRODUCT",
  DuplicateVariant = "DUPLICATE_VARIANT",
  CannotCombineCollectionsWithProductsOrVariants = "CANNOT_COMBINE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS",
  InvalidCollection = "INVALID_COLLECTION",
  InvalidProduct = "INVALID_PRODUCT",
  InvalidVariant = "INVALID_VARIANT",
  ActivePeriodOverlap = "ACTIVE_PERIOD_OVERLAP",
}
export interface DiscountAutomaticBxgyInput {
  startsAt?: DateTime | null;
  endsAt?: DateTime | null;
  title?: string | null;
  usesPerOrderLimit?: UnsignedInt64 | null;
  customerBuys?: DiscountCustomerBuysInput | null;
  customerGets?: DiscountCustomerGetsInput | null;
}
export interface DiscountCustomerBuysInput {
  value?: DiscountCustomerBuysValueInput | null;
  items?: DiscountItemsInput | null;
}
export interface DiscountCustomerBuysValueInput {
  quantity?: UnsignedInt64 | null;
}
export interface DiscountItemsInput {
  products?: DiscountProductsInput | null;
  collections?: DiscountCollectionsInput | null;
}
export interface DiscountProductsInput {
  productIds?: string[] | null;
  productVariantIds?: string[] | null;
}
export interface DiscountCollectionsInput {
  collectionIds?: string[] | null;
}
export interface DiscountCustomerGetsInput {
  value?: DiscountCustomerGetsValueInput | null;
  items?: DiscountItemsInput | null;
}
export interface DiscountCustomerGetsValueInput {
  discountOnQuantity?: DiscountOnQuantityInput | null;
}
export interface DiscountOnQuantityInput {
  quantity?: UnsignedInt64 | null;
  effect?: DiscountEffectInput | null;
}
export interface DiscountEffectInput {
  percentage?: number | null;
}
export interface DnsRecordInput {
  type?: DnsRecordType | null;
  name?: string | null;
  value?: string | null;
  priority?: number | null;
  weight?: number | null;
  port?: number | null;
  protocol?: string | null;
  service?: string | null;
}
export interface DraftOrderInput {
  appliedDiscount?: DraftOrderAppliedDiscountInput | null;
  billingAddress?: MailingAddressInput | null;
  customerId?: string | null;
  customAttributes?: AttributeInput[] | null;
  email?: string | null;
  lineItems?: DraftOrderLineItemInput[] | null;
  metafields?: MetafieldInput[] | null;
  note?: string | null;
  shippingAddress?: MailingAddressInput | null;
  shippingLine?: ShippingLineInput | null;
  tags?: string[] | null;
  taxExempt?: boolean | null;
  useCustomerDefaultAddress?: boolean | null;
}
export interface DraftOrderAppliedDiscountInput {
  amount: Money;
  description?: string | null;
  title?: string | null;
  value: number;
  valueType: DraftOrderAppliedDiscountType;
}
export interface DraftOrderLineItemInput {
  appliedDiscount?: DraftOrderAppliedDiscountInput | null;
  customAttributes?: AttributeInput[] | null;
  grams?: number | null;
  originalUnitPrice?: Money | null;
  quantity: number;
  requiresShipping?: boolean | null;
  sku?: string | null;
  taxable?: boolean | null;
  title?: string | null;
  variantId?: string | null;
  weight?: WeightInput | null;
}
export interface ShippingLineInput {
  price?: Money | null;
  shippingRateHandle?: string | null;
  title?: string | null;
}
export interface DraftOrderDeleteInput {
  id: string;
}
export interface EmailInput {
  subject?: string | null;
  to?: string | null;
  from?: string | null;
  body?: string | null;
  bcc?: string[] | null;
  customMessage?: string | null;
}
export interface ExchangeReceiptSendRecipientInput {
  email?: string | null;
  phone?: string | null;
}
export interface FulfillmentInput {
  orderId: string;
  lineItems?: FulfillmentLineItemInput[] | null;
  trackingNumbers?: string[] | null;
  trackingUrls?: string[] | null;
  trackingCompany?: string | null;
  notifyCustomer?: boolean | null;
  shippingMethod?: string | null;
  locationId?: string | null;
}
export interface FulfillmentLineItemInput {
  id: string;
  quantity?: number | null;
}
export interface TrackingInfoUpdateInput {
  trackingDetails?: TrackingInfoInput[] | null;
  trackingCompany?: string | null;
  notifyCustomer?: boolean | null;
}
export interface TrackingInfoInput {
  number?: string | null;
  url?: string | null;
}
export interface HomeCardClickInput {
  id: string;
  buttonId?: string | null;
}
export interface HomeCardFeedbackInput {
  id: string;
  feedback?: string | null;
  comment?: string | null;
}
export interface HomeCardInteractionInput {
  id: string;
  action: MutationsHomeCardInteractionAction;
  buttonId?: string | null;
}
export enum MutationsHomeCardInteractionAction {
  Dismiss = "DISMISS",
  UndoDismiss = "UNDO_DISMISS",
  Click = "CLICK",
  Upvote = "UPVOTE",
  Downvote = "DOWNVOTE",
}
export interface HomeCardViewInput {
  id: string;
  position: number;
}
export interface HomeIndustryFeedbackInput {
  accepted: string[];
  rejected: string[];
  other?: string | null;
}
export interface HomeIndustryInteractionInput {
  action: HomeIndustryInteractionAction;
  industry: string;
}
export enum HomeIndustryInteractionAction {
  Dismiss = "DISMISS",
  UndoDismiss = "UNDO_DISMISS",
}
export interface HomeItemDrillInput {
  id: string;
  direction: HomeItemDrillDirection;
}
export enum HomeItemDrillDirection {
  Up = "UP",
  Down = "DOWN",
}
export interface HomeQuestionCardAnswerInput {
  id: string;
  answer: string;
  comments?: string | null;
}
export enum MutationsHomeTagInteractionAction {
  Dismiss = "DISMISS",
  UndoDismiss = "UNDO_DISMISS",
}
export interface InventoryAdjustQuantityInput {
  inventoryLevelId: string;
  availableDelta: number;
}
export interface InventoryAdjustItemInput {
  inventoryItemId: string;
  availableDelta: number;
}
export interface LocationInput {
  name: string;
  address: LocationAddressInput;
}
export interface LocationAddressInput {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  phone?: string | null;
  zip?: string | null;
  countryCode?: string | null;
  provinceCode?: string | null;
}
export interface MutationsMarketingActivityCreateInput {
  budget?: MarketingActivityBudgetInput | null;
  adSpend?: MoneyInput | null;
  status: MarketingActivityStatus;
  context: string;
  utm?: UTMInput | null;
}
export interface MarketingActivityBudgetInput {
  budgetType?: MarketingBudgetBudgetType | null;
  total?: MoneyInput | null;
}
export interface UTMInput {
  campaign: string;
  source: string;
  medium: string;
}
export interface MarketingActivityUpdateInput {
  id: string;
  budget?: MarketingActivityBudgetInput | null;
  adSpend?: MoneyInput | null;
  status?: MarketingActivityStatus | null;
  context?: string | null;
  errors?: JSON | null;
}
export type JSON = string;
export enum MarketingActivityUpdateOperationType {
  Update = "UPDATE",
  Pause = "PAUSE",
  Resume = "RESUME",
  Republish = "REPUBLISH",
}
export interface MarketingEngagementInput {
  occurredOn: Date;
  impressionsCount?: number | null;
  viewsCount?: number | null;
  clicksCount?: number | null;
  sharesCount?: number | null;
  favoritesCount?: number | null;
  commentsCount?: number | null;
  adSpend?: MoneyInput | null;
  isCumulative?: boolean | null;
  utcOffset?: UtcOffset | null;
  fetchedAt?: DateTime | null;
}
export type UtcOffset = string;
export enum MarketingRecommendationFeedback {
  Consume = "CONSUME",
  View = "VIEW",
  Reject = "REJECT",
}
export interface MarketingSectionViewTrackingInput {
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
  utmSource?: string | null;
  utmCampaign?: string | null;
  utmMedium?: string | null;
  utmTerm?: string | null;
  utmContent?: string | null;
}
export interface MarketingSectionCampaignCreateTrackingInput {
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
}
export interface MarketingSectionCampaignViewTrackingInput {
  marketingCampaignId: string;
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
}
export interface MarketingSectionCampaignRenameTrackingInput {
  marketingCampaignId: string;
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
}
export interface MarketingSectionActivityAddTrackingInput {
  marketingCampaignId: string;
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
}
export interface MarketingSectionCampaignModalCreateTrackingInput {
  marketingCampaignId: string;
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
  marketingCampaignTitle: string;
  marketingCampaignSuggestionTitle?: string | null;
}
export interface MarketingSectionCampaignModalSuggestionSelectTrackingInput {
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
  marketingCampaignSuggestionTitle: string;
  position: number;
}
export interface MarketingSectionActivityDashboardViewTrackingInput {
  marketingActivityId: string;
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
}
export interface MarketingSectionExternalActivityDashboardViewTrackingInput {
  marketingActivityId: string;
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
}
export interface MarketingSectionExternalActivitiesViewTrackingInput {
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
}
export interface MarketingSectionActivityEditTrackingInput {
  marketingCampaignId: string;
  marketingActivityId: string;
  marketingActivityExtensionId: string;
  appId: string;
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
}
export interface MarketingSectionAppSelectTrackingInput {
  appId: string;
  marketingActivityExtensionId?: string | null;
  position: number;
  listItemState: MarketingActivityCreationItemType;
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
}
export interface MarketingSectionAppSetupTrackingInput {
  resourceType: ResourceType;
  resourceLocation: ResourceLocation;
  appId: string;
}
export interface MetafieldDeleteInput {
  id: string;
}
export interface OrderCaptureInput {
  id: string;
  parentTransactionId: string;
  amount: Money;
  currency?: CurrencyCode | null;
}
export interface OrderCloseInput {
  id: string;
}
export interface OrderMarkAsPaidInput {
  id: string;
}
export interface OrderOpenInput {
  id: string;
}
export interface OrderInput {
  email?: string | null;
  id: string;
  note?: string | null;
  tags?: string[] | null;
  shippingAddress?: MailingAddressInput | null;
}
export interface PackingSlipInput {
  orderId: string;
  lineItems: PackingSlipInputLineItemInput[];
}
export interface PackingSlipInputLineItemInput {
  id: string;
  shippingQuantity: number;
}
export enum PaymentProviderDisableReason {
  RatesAreTooExpensive = "RATES_ARE_TOO_EXPENSIVE",
  PayoutTimesAreTooSlow = "PAYOUT_TIMES_ARE_TOO_SLOW",
  ProductIsProhibited = "PRODUCT_IS_PROHIBITED",
  InPersonSellingIsNotSupported = "IN_PERSON_SELLING_IS_NOT_SUPPORTED",
  FraudToolsDonTSupportBusinessNeeds = "FRAUD_TOOLS_DON_T_SUPPORT_BUSINESS_NEEDS",
  PreferredCurrencyIsNotAvailable = "PREFERRED_CURRENCY_IS_NOT_AVAILABLE",
  IntegrationWithThirdPartySystemsIsNotPossible = "INTEGRATION_WITH_THIRD_PARTY_SYSTEMS_IS_NOT_POSSIBLE",
  Other = "OTHER",
}
export enum PriceRuleErrorCode {
  Blank = "BLANK",
  EqualTo = "EQUAL_TO",
  GreaterThan = "GREATER_THAN",
  Invalid = "INVALID",
  LessThanOrEqualTo = "LESS_THAN_OR_EQUAL_TO",
  Taken = "TAKEN",
  TooLong = "TOO_LONG",
  TooShort = "TOO_SHORT",
  ItemEntitlementsMissing = "ITEM_ENTITLEMENTS_MISSING",
  ItemEntitlementsInvalidTargetTypeOrSelection = "ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION",
  CannotEntitleCollectionsWithProductsOrVariants = "CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS",
  ItemEntitlementInvalidType = "ITEM_ENTITLEMENT_INVALID_TYPE",
  ItemEntitlementsExceededMaxProduct = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT",
  ItemEntitlementsExceededMaxVariant = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT",
  ItemEntitlementsExceededMaxCollection = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION",
  ItemEntitlementsInvalidProduct = "ITEM_ENTITLEMENTS_INVALID_PRODUCT",
  ItemEntitlementsInvalidVariant = "ITEM_ENTITLEMENTS_INVALID_VARIANT",
  ItemEntitlementsInvalidCollection = "ITEM_ENTITLEMENTS_INVALID_COLLECTION",
  ItemEntitlementsDuplicateProduct = "ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT",
  ItemEntitlementsDuplicateVariant = "ITEM_ENTITLEMENTS_DUPLICATE_VARIANT",
  ItemEntitlementsDuplicateCollection = "ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION",
  VariantAlreadyEntitledThroughProduct = "VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT",
  ItemPrerequisitesInvalidType = "ITEM_PREREQUISITES_INVALID_TYPE",
  ItemPrerequisitesInvalidCollection = "ITEM_PREREQUISITES_INVALID_COLLECTION",
  ItemPrerequisitesExceededMax = "ITEM_PREREQUISITES_EXCEEDED_MAX",
  ItemPrerequisitesInvalidProduct = "ITEM_PREREQUISITES_INVALID_PRODUCT",
  ItemPrerequisitesInvalidVariant = "ITEM_PREREQUISITES_INVALID_VARIANT",
  ItemPrerequisitesDuplicateProduct = "ITEM_PREREQUISITES_DUPLICATE_PRODUCT",
  ItemPrerequisitesDuplicateVariant = "ITEM_PREREQUISITES_DUPLICATE_VARIANT",
  ItemPrerequisitesDuplicateCollection = "ITEM_PREREQUISITES_DUPLICATE_COLLECTION",
  ItemPrerequisitesMustBeEmpty = "ITEM_PREREQUISITES_MUST_BE_EMPTY",
  CannotPrerequisiteCollectionWithProductOrVariants = "CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS",
  ItemPrerequisitesMissing = "ITEM_PREREQUISITES_MISSING",
  ShippingEntitlementsExceededMax = "SHIPPING_ENTITLEMENTS_EXCEEDED_MAX",
  ShippingEntitlementsInvalidTargetTypeOrSelection = "SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION",
  ShippingEntitlementsUnsupportedDestinationType = "SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE",
  ShippingEntitlementsInvalidCountry = "SHIPPING_ENTITLEMENTS_INVALID_COUNTRY",
  InvalidTargetTypePrerequisiteShippingPriceRange = "INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE",
  ShippingEntitlementsDuplicateCountry = "SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY",
  ShippingEntitlementsMissing = "SHIPPING_ENTITLEMENTS_MISSING",
  CustomerPrerequisitesInvalidSelection = "CUSTOMER_PREREQUISITES_INVALID_SELECTION",
  CustomerPrerequisitesMissing = "CUSTOMER_PREREQUISITES_MISSING",
  BothCustomerAndSavedSearchPrerequisitesSelected = "BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED",
  CustomerSavedSearchExceededMax = "CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX",
  CustomerPrerequisitesExceededMax = "CUSTOMER_PREREQUISITES_EXCEEDED_MAX",
  CustomerSavedSearchInvalid = "CUSTOMER_SAVED_SEARCH_INVALID",
  CustomerSavedSearchDuplicate = "CUSTOMER_SAVED_SEARCH_DUPLICATE",
  DiscountCodeDuplicate = "DISCOUNT_CODE_DUPLICATE",
  BogoInvalidTargetType = "BOGO_INVALID_TARGET_TYPE",
  BogoInvalidValueType = "BOGO_INVALID_VALUE_TYPE",
  BogoInvalidTargetSelection = "BOGO_INVALID_TARGET_SELECTION",
  PriceRulePercentageValueOutsideRange = "PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE",
  PriceRuleAllocationLimitIsZero = "PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO",
  PriceRuleExceededMaxDiscountCode = "PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE",
  EndDateBeforeStartDate = "END_DATE_BEFORE_START_DATE",
  PrerequisiteSubtotalAndQuantityRangeBothPresent = "PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT",
  ShopExceededMaxPriceRules = "SHOP_EXCEEDED_MAX_PRICE_RULES",
  PriceRuleAllocationLimitOnNonBogo = "PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO",
}
export interface PriceRuleInput {
  validityPeriod?: PriceRuleValidityPeriodInput | null;
  oncePerCustomer?: boolean | null;
  customerSelection?: PriceRuleCustomerSelectionInput | null;
  usageLimit?: number | null;
  title?: string | null;
  allocationLimit?: number | null;
  allocationMethod?: PriceRuleAllocationMethod | null;
  value?: PriceRuleValueInput | null;
  target?: PriceRuleTarget | null;
  prerequisiteSubtotalRange?: PriceRuleMoneyRangeInput | null;
  prerequisiteQuantityRange?: PriceRuleQuantityRangeInput | null;
  prerequisiteShippingPriceRange?: PriceRuleMoneyRangeInput | null;
  itemEntitlements?: PriceRuleItemEntitlementsInput | null;
  itemPrerequisites?: PriceRuleItemPrerequisitesInput | null;
  shippingEntitlements?: PriceRuleShippingEntitlementsInput | null;
  entitlementToPrerequisiteQuantityRatio?: PriceRuleEntitlementToPrerequisiteQuantityRatioInput | null;
  prerequisiteToEntitlementQuantityRatio?: PriceRulePrerequisiteToEntitlementQuantityRatioInput | null;
}
export interface PriceRuleValidityPeriodInput {
  start: DateTime;
  end?: DateTime | null;
}
export interface PriceRuleCustomerSelectionInput {
  forAllCustomers?: boolean | null;
  savedSearchIds?: string[] | null;
  customerIdsToAdd?: string[] | null;
  customerIdsToRemove?: string[] | null;
}
export interface PriceRuleValueInput {
  percentageValue?: number | null;
  fixedAmountValue?: Money | null;
}
export interface PriceRuleMoneyRangeInput {
  lessThan?: Money | null;
  lessThanOrEqualTo?: Money | null;
  greaterThan?: Money | null;
  greaterThanOrEqualTo?: Money | null;
}
export interface PriceRuleQuantityRangeInput {
  lessThan?: number | null;
  lessThanOrEqualTo?: number | null;
  greaterThan?: number | null;
  greaterThanOrEqualTo?: number | null;
}
export interface PriceRuleItemEntitlementsInput {
  targetAllLineItems?: boolean | null;
  productIds?: string[] | null;
  productVariantIds?: string[] | null;
  collectionIds?: string[] | null;
}
export interface PriceRuleItemPrerequisitesInput {
  productIds?: string[] | null;
  productVariantIds?: string[] | null;
  collectionIds?: string[] | null;
}
export interface PriceRuleShippingEntitlementsInput {
  targetAllShippingLines?: boolean | null;
  countryCodes?: CountryCode[] | null;
  includeRestOfWorld?: boolean | null;
}
export interface PriceRuleEntitlementToPrerequisiteQuantityRatioInput {
  entitlementQuantity?: number | null;
  prerequisiteQuantity?: number | null;
}
export interface PriceRulePrerequisiteToEntitlementQuantityRatioInput {
  entitlementQuantity?: number | null;
  prerequisiteQuantity?: number | null;
}
export interface PriceRuleDiscountCodeInput {
  code?: string | null;
}
export interface ProductAppendImagesInput {
  id: string;
  images: ImageInput[];
}
export interface ProductInput {
  bodyHtml?: string | null;
  collectionsToJoin?: string[] | null;
  collectionsToLeave?: string[] | null;
  descriptionHtml?: string | null;
  handle?: string | null;
  redirectNewHandle?: boolean | null;
  id?: string | null;
  images?: ImageInput[] | null;
  metafields?: MetafieldInput[] | null;
  seo?: SEOInput | null;
  options?: string[] | null;
  productType?: string | null;
  productPublications?: ProductPublicationInput[] | null;
  publications?: ProductPublicationInput[] | null;
  publishDate?: DateTime | null;
  publishOn?: DateTime | null;
  published?: boolean | null;
  publishedAt?: DateTime | null;
  tags?: string[] | null;
  templateSuffix?: string | null;
  giftCardTemplateSuffix?: string | null;
  title?: string | null;
  variants?: ProductVariantInput[] | null;
  vendor?: string | null;
}
export interface ProductPublicationInput {
  publicationId?: string | null;
  channelId?: string | null;
  channelHandle?: string | null;
  publishDate?: DateTime | null;
}
export interface ProductVariantInput {
  barcode?: string | null;
  compareAtPrice?: Money | null;
  fulfillmentServiceId?: string | null;
  harmonizedSystemCode?: string | null;
  id?: string | null;
  imageId?: string | null;
  imageSrc?: string | null;
  inventoryManagement?: ProductVariantInventoryManagement | null;
  inventoryPolicy?: ProductVariantInventoryPolicy | null;
  inventoryQuantity?: number | null;
  inventoryQuantityAdjustment?: number | null;
  inventoryQuantities?: InventoryLevelInput[] | null;
  metafields?: MetafieldInput[] | null;
  options?: string[] | null;
  position?: number | null;
  price?: Money | null;
  productId?: string | null;
  requiresShipping?: boolean | null;
  sku?: string | null;
  taxable?: boolean | null;
  title?: string | null;
  taxCode?: string | null;
  weight?: number | null;
  weightUnit?: WeightUnit | null;
}
export interface InventoryLevelInput {
  availableQuantity: number;
  locationId: string;
}
export interface ProductDeleteInput {
  id: string;
}
export interface ProductPublishInput {
  id: string;
  productPublications: ProductPublicationInput[];
}
export interface ProductUnpublishInput {
  id: string;
  productPublications: ProductPublicationInput[];
}
export interface PublicationInput {
  channelId?: string | null;
  publicationId?: string | null;
  publishDate?: DateTime | null;
}
export interface RefundInput {
  currency?: CurrencyCode | null;
  orderId: string;
  restock?: boolean | null;
  note?: string | null;
  notify?: boolean | null;
  shipping?: ShippingRefundInput | null;
  refundLineItems?: RefundLineItemInput[] | null;
  transactions?: OrderTransactionInput[] | null;
}
export interface DeliveryCarrierInput {
  carrierServiceId: string;
  carrierServiceCode: string;
  carrierServiceName: string;
}
export interface DeliveryReturnLabelInput {
  destinationAddress?: MailingAddressInput | null;
  shippingPackagingId?: string | null;
  totalWeight?: WeightInput | null;
}
export interface SavedSearchCreateInput {
  resourceType: SearchResultType;
  name: string;
  query: string;
}
export interface SavedSearchDeleteInput {
  id: string;
}
export interface SavedSearchUpdateInput {
  id: string;
  name?: string | null;
  query?: string | null;
}
export interface ScriptTagInput {
  src?: URL | null;
  displayScope?: ScriptTagDisplayScope | null;
}
export interface TaxSettingsInput {
  taxShipping?: boolean | null;
  taxesIncluded?: boolean | null;
  euDigitalGoodsCollectionEnabled?: boolean | null;
}
export enum ShopifyPaymentsBalanceDebitReasonCode {
  CapitalRemittance = "CAPITAL_REMITTANCE",
  ChargebackProtection = "CHARGEBACK_PROTECTION",
}
export enum ShopifyPaymentsBalanceDebitFailureCode {
  InsufficientFunds = "INSUFFICIENT_FUNDS",
  InvalidAccount = "INVALID_ACCOUNT",
  Unknown = "UNKNOWN",
}
export enum ShopifyPaymentsBalanceDebitStatus {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
  Error = "ERROR",
}
export enum ShopifyPaymentsBalanceDebitReversalFailureCode {
  InsufficientFunds = "INSUFFICIENT_FUNDS",
  ReversalAmountExceeded = "REVERSAL_AMOUNT_EXCEEDED",
  InvalidAccount = "INVALID_ACCOUNT",
  Unknown = "UNKNOWN",
}
export enum ShopifyPaymentsBalanceDebitReversalStatus {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
  Error = "ERROR",
}
export interface StaffMemberInviteInput {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  permissions?: StaffMemberPermission[] | null;
}
export interface StaffMemberInput {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  permissions?: StaffMemberPermission[] | null;
}
export interface StagedUploadTargetGenerateInput {
  resource: StagedUploadTargetGenerateUploadResource;
  filename: string;
  mimeType: string;
}
export enum StagedUploadTargetGenerateUploadResource {
  Timeline = "TIMELINE",
  ProductImage = "PRODUCT_IMAGE",
  CollectionImage = "COLLECTION_IMAGE",
  ShopImage = "SHOP_IMAGE",
}
export interface StageImageInput {
  resource: StagedUploadTargetGenerateUploadResource;
  filename: string;
  mimeType: string;
}
export interface StorefrontAccessTokenInput {
  title: string;
}
export interface StorefrontAccessTokenDeleteInput {
  id: string;
}
export interface TaxOverrideRegionInput {
  id?: string | null;
  rate: number;
  zoneId: string;
}
export interface TaxOverrideInput {
  taxOverrideRegions?: TaxOverrideRegionInput[] | null;
  collectionId?: string | null;
  countryCode: CountryCode;
  isShipping: boolean;
}
export interface TaxRegistrationInput {
  id: string;
  registrationNumber?: string | null;
  registered: boolean;
}
export interface TimelineCommentCreateInput {
  resourceId: string;
  message: string;
  attachments?: AttachmentInput[] | null;
}
export interface AttachmentInput {
  id?: string | null;
  url?: string | null;
}
export interface TimelineCommentDeleteInput {
  id: string;
}
export interface TimelineCommentEditInput {
  id: string;
  message: string;
  attachments?: AttachmentInput[] | null;
}
export interface WebhookSubscriptionInput {
  callbackUrl?: URL | null;
  format?: WebhookSubscriptionFormat | null;
  includeFields?: string[] | null;
  metafieldNamespaces?: string[] | null;
}
export enum PageSize {
  Page_8X_11 = "PAGE_8_X_11",
  Page_4X_6 = "PAGE_4_X_6",
}
export enum ContentDisposition {
  Inline = "INLINE",
  Attachment = "ATTACHMENT",
}
export enum ShippingPackageType {
  Box = "BOX",
  FlatRate = "FLAT_RATE",
  Envelope = "ENVELOPE",
  SoftPack = "SOFT_PACK",
  Tube = "TUBE",
}
export enum OrderRiskRecommendationResult {
  Cancel = "CANCEL",
  Investigate = "INVESTIGATE",
  Accept = "ACCEPT",
  None = "NONE",
}
export enum FactSortKeys {
  Result = "RESULT",
  Default = "DEFAULT",
}
export enum RiskFactSentiment {
  Positive = "POSITIVE",
  Neutral = "NEUTRAL",
  Negative = "NEGATIVE",
}
export enum RiskAssessmentResult {
  High = "HIGH",
  Medium = "MEDIUM",
  Low = "LOW",
  None = "NONE",
  Pending = "PENDING",
}
export enum FraudProtectionLevel {
  FullyProtected = "FULLY_PROTECTED",
  PartiallyProtected = "PARTIALLY_PROTECTED",
  NotProtected = "NOT_PROTECTED",
  Pending = "PENDING",
  NotEligible = "NOT_ELIGIBLE",
  NotAvailable = "NOT_AVAILABLE",
}
export enum FulfillmentAction {
  CreateFulfillment = "CREATE_FULFILLMENT",
  PurchaseLabel = "PURCHASE_LABEL",
}
export interface MobileDeviceRegisterInput {
  id?: string | null;
  token: string;
  name: string;
  snsPlatformApplication?: string | null;
  badgeEnabled?: boolean | null;
  identifier?: string | null;
}
export interface MobileDeviceUnregisterInput {
  id: string;
}
export interface MobileTokenDeleteInput {
  tokenFingerprint: string;
}
export interface NotificationSubscriptionInput {
  enabled: boolean;
  id: string;
}
export enum ShippingLabelCancellationReason {
  WrongMailService = "WRONG_MAIL_SERVICE",
  WrongPackageSize = "WRONG_PACKAGE_SIZE",
  WrongWeight = "WRONG_WEIGHT",
  WrongShipDate = "WRONG_SHIP_DATE",
  ErrorDownloadingLabel = "ERROR_DOWNLOADING_LABEL",
  ErrorPrintingLabel = "ERROR_PRINTING_LABEL",
  WrongLabelFormat = "WRONG_LABEL_FORMAT",
  LabelTooExpensive = "LABEL_TOO_EXPENSIVE",
  Other = "OTHER",
}
export enum HomeMetricType {
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
  Positive = "POSITIVE",
  Negative = "NEGATIVE",
}
export enum HomeGoalCompleteCardGoalStatus {
  Positive = "POSITIVE",
  Negative = "NEGATIVE",
  Neutral = "NEUTRAL",
}