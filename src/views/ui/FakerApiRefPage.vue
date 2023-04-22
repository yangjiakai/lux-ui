<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
// Address
// buildingNumber
// cardinalDirection
// city
// cityName
// cityPrefix
// citySuffix
// country
// countryCode
// county
// direction
// latitude
// longitude
// nearbyGPSCoordinate
// ordinalDirection
// secondaryAddress
// state
// stateAbbr
// street
// streetAddress
// streetName
// streetPrefix
// streetSuffix
// timeZone
// zipCode
// zipCodeByState
// Animal
// bear
// bird
// cat
// cetacean
// cow
// crocodilia
// dog
// fish
// horse
// insect
// lion
// rabbit
// rodent
// snake
// type
// Color
// cmyk
// colorByCSSColorSpace
// cssSupportedFunction
// cssSupportedSpace
// hsl
// human
// hwb
// lab
// lch
// rgb
// space
// Commerce
// color
// department
// price
// product
// productAdjective
// productDescription
// productMaterial
// productName
// Company
// bs
// bsAdjective
// bsBuzz
// bsNoun
// catchPhrase
// catchPhraseAdjective
// catchPhraseDescriptor
// catchPhraseNoun
// companyName
// companySuffix
// name
// suffixes
// Database
// collation
// column
// engine
// mongodbObjectId
// type
// Datatype
// array
// bigInt
// boolean
// datetime
// float
// hexadecimal
// json
// number
// string
// uuid
// Date
// between
// betweens
// birthdate
// future
// month
// past
// recent
// soon
// weekday
// Fake
// fake
// Finance
// account
// accountName
// amount
// bic
// bitcoinAddress
// creditCardCVV
// creditCardIssuer
// creditCardNumber
// currencyCode
// currencyName
// currencySymbol
// ethereumAddress
// iban
// litecoinAddress
// mask
// pin
// routingNumber
// transactionDescription
// transactionType
// Git
// branch
// commitEntry
// commitMessage
// commitSha
// shortSha
// Hacker
// abbreviation
// adjective
// ingverb
// noun
// phrase
// verb
// Helpers
// arrayElement
// arrayElements
// fake
// maybe
// mustache
// objectKey
// objectValue
// regexpStyleStringParse
// repeatString
// replaceCreditCardSymbols
// replaceSymbolWithNumber
// replaceSymbols
// shuffle
// slugify
// unique
// uniqueArray
// Image
// abstract
// animals
// avatar
// business
// cats
// city
// dataUri
// fashion
// food
// image
// imageUrl
// nature
// nightlife
// people
// sports
// technics
// transport
// Internet
// avatar
// color
// domainName
// domainSuffix
// domainWord
// email
// emoji
// exampleEmail
// httpMethod
// httpStatusCode
// ip
// ipv4
// ipv6
// mac
// password
// port
// protocol
// url
// userAgent
// userName
// Lorem
// lines
// paragraph
// paragraphs
// sentence
// sentences
// slug
// text
// word
// words
// Mersenne
// rand
// seed
// seed_array
// Music
// genre
// songName
// Name
// findName
// firstName
// fullName
// gender
// jobArea
// jobDescriptor
// jobTitle
// jobType
// lastName
// middleName
// prefix
// sex
// sexType
// suffix
// Phone
// imei
// number
// phoneFormats
// phoneNumber
// phoneNumberFormat
// Random
// alpha
// alphaNumeric
// locale
// numeric
// word
// words
// Science
// chemicalElement
// unit
// System
// commonFileExt
// commonFileName
// commonFileType
// cron
// directoryPath
// fileExt
// fileName
// filePath
// fileType
// mimeType
// networkInterface
// semver
// Unique
// unique
// Vehicle
// bicycle
// color
// fuel
// manufacturer
// model
// type
// vehicle
// vin
// vrm
// Word
// adjective
// adverb
// conjunction
// interjection
// noun
// preposition
// verb

import { faker } from "@faker-js/faker";

// Address Data
const address = reactive({
  city: {
    label: "city",
    value: faker.address.city(),
    code: "faker.address.city()",
  },

  streetName: {
    label: "streetName",
    value: faker.address.streetName(),
    code: "faker.address.streetName()",
  },
  streetAddress: {
    label: "streetAddress",
    value: faker.address.streetAddress(),
    code: "faker.address.streetAddress()",
  },
  streetSuffix: {
    label: "streetSuffix",
    value: faker.address.streetSuffix(),
    code: "faker.address.streetSuffix()",
  },
  streetPrefix: {
    label: "streetPrefix",
    value: faker.address.streetPrefix(),
    code: "faker.address.streetPrefix()",
  },
  secondaryAddress: {
    label: "secondaryAddress",
    value: faker.address.secondaryAddress(),
    code: "faker.address.secondaryAddress()",
  },
  county: {
    label: "county",
    value: faker.address.county(),
    code: "faker.address.county()",
  },
  country: {
    label: "country",
    value: faker.address.country(),
    code: "faker.address.country()",
  },
  countryCode: {
    label: "countryCode",
    value: faker.address.countryCode(),
    code: "faker.address.countryCode()",
  },
  state: {
    label: "state",
    value: faker.address.state(),
    code: "faker.address.state()",
  },
  stateAbbr: {
    label: "stateAbbr",
    value: faker.address.stateAbbr(),
    code: "faker.address.stateAbbr()",
  },
  latitude: {
    label: "latitude",
    value: faker.address.latitude(),
    code: "faker.address.latitude()",
  },
  longitude: {
    label: "longitude",
    value: faker.address.longitude(),
    code: "faker.address.longitude()",
  },
  direction: {
    label: "direction",
    value: faker.address.direction(),
    code: "faker.address.direction()",
  },
  cardinalDirection: {
    label: "cardinalDirection",
    value: faker.address.cardinalDirection(),
    code: "faker.address.cardinalDirection()",
  },
  ordinalDirection: {
    label: "ordinalDirection",
    value: faker.address.ordinalDirection(),
    code: "faker.address.ordinalDirection()",
  },
  nearbyGPSCoordinate: {
    label: "nearbyGPSCoordinate",
    value: faker.address.nearbyGPSCoordinate(),
    code: "faker.address.nearbyGPSCoordinate()",
  },
  timeZone: {
    label: "timeZone",
    value: faker.address.timeZone(),
    code: "faker.address.timeZone()",
  },
});

// Animal Data(label,value,code)
const animal = reactive({
  cat: {
    label: "cat",
    value: faker.animal.cat(),
    code: "faker.animal.cat()",
  },
  dog: {
    label: "dog",
    value: faker.animal.dog(),
    code: "faker.animal.dog()",
  },
  snake: {
    label: "snake",
    value: faker.animal.snake(),
    code: "faker.animal.snake()",
  },
  bear: {
    label: "bear",
    value: faker.animal.bear(),
    code: "faker.animal.bear()",
  },
  lion: {
    label: "lion",
    value: faker.animal.lion(),
    code: "faker.animal.lion()",
  },
  crocodilia: {
    label: "crocodilia",
    value: faker.animal.crocodilia(),
    code: "faker.animal.crocodilia()",
  },
  bird: {
    label: "bird",
    value: faker.animal.bird(),
    code: "faker.animal.bird()",
  },
  cow: {
    label: "cow",
    value: faker.animal.cow(),
    code: "faker.animal.cow()",
  },
  horse: {
    label: "horse",
    value: faker.animal.horse(),
    code: "faker.animal.horse()",
  },
  rabbit: {
    label: "rabbit",
    value: faker.animal.rabbit(),
    code: "faker.animal.rabbit()",
  },

  fish: {
    label: "fish",
    value: faker.animal.fish(),
    code: "faker.animal.fish()",
  },
  insect: {
    label: "insect",
    value: faker.animal.insect(),
    code: "faker.animal.insect()",
  },
});

// Commerce Data(label,value,code)
const commerce = reactive({
  color: {
    label: "color",
    value: faker.commerce.color(),
    code: "faker.commerce.color()",
  },
  department: {
    label: "department",
    value: faker.commerce.department(),
    code: "faker.commerce.department()",
  },
  productName: {
    label: "productName",
    value: faker.commerce.productName(),
    code: "faker.commerce.productName()",
  },
  price: {
    label: "price",
    value: faker.commerce.price(),
    code: "faker.commerce.price()",
  },
  productAdjective: {
    label: "productAdjective",
    value: faker.commerce.productAdjective(),
    code: "faker.commerce.productAdjective()",
  },
  productMaterial: {
    label: "productMaterial",
    value: faker.commerce.productMaterial(),
    code: "faker.commerce.productMaterial()",
  },
  product: {
    label: "product",
    value: faker.commerce.product(),
    code: "faker.commerce.product()",
  },
});

// Color Data(label,value,code)
// cmyk
// colorByCSSColorSpace
// cssSupportedFunction
// cssSupportedSpace
// hsl
// human
// hwb
// lab
// lch
// rgb
// space

const color = reactive({
  cmyk: {
    label: "cmyk",
    value: faker.color.cmyk(),
    code: "faker.color.cmyk()",
  },
  colorByCSSColorSpace: {
    label: "colorByCSSColorSpace",
    value: faker.color.colorByCSSColorSpace(),
    code: "faker.color.colorByCSSColorSpace()",
  },
  cssSupportedFunction: {
    label: "cssSupportedFunction",
    value: faker.color.cssSupportedFunction(),
    code: "faker.color.cssSupportedFunction()",
  },
  cssSupportedSpace: {
    label: "cssSupportedSpace",
    value: faker.color.cssSupportedSpace(),
    code: "faker.color.cssSupportedSpace()",
  },
  hsl: {
    label: "hsl",
    value: faker.color.hsl(),
    code: "faker.color.hsl()",
  },
  human: {
    label: "human",
    value: faker.color.human(),
    code: "faker.color.human()",
  },
  hwb: {
    label: "hwb",
    value: faker.color.hwb(),
    code: "faker.color.hwb()",
  },
  lab: {
    label: "lab",
    value: faker.color.lab(),
    code: "faker.color.lab()",
  },
  lch: {
    label: "lch",
    value: faker.color.lch(),
    code: "faker.color.lch()",
  },
  rgb: {
    label: "rgb",
    value: faker.color.rgb(),
    code: "faker.color.rgb()",
  },
  space: {
    label: "space",
    value: faker.color.space(),
    code: "faker.color.space()",
  },
});

// Company Data(label,value,code)
const company = reactive({
  suffixes: {
    label: "suffixes",
    value: faker.company.suffixes(),
    code: "faker.company.suffixes()",
  },
  companyName: {
    label: "companyName",
    value: faker.company.companyName(),
    code: "faker.company.companyName()",
  },
  companySuffix: {
    label: "companySuffix",
    value: faker.company.companySuffix(),
    code: "faker.company.companySuffix()",
  },
  catchPhrase: {
    label: "catchPhrase",
    value: faker.company.catchPhrase(),
    code: "faker.company.catchPhrase()",
  },
  bs: {
    label: "bs",
    value: faker.company.bs(),
    code: "faker.company.bs()",
  },
  catchPhraseAdjective: {
    label: "catchPhraseAdjective",
    value: faker.company.catchPhraseAdjective(),
    code: "faker.company.catchPhraseAdjective()",
  },
  catchPhraseDescriptor: {
    label: "catchPhraseDescriptor",
    value: faker.company.catchPhraseDescriptor(),
    code: "faker.company.catchPhraseDescriptor()",
  },
  catchPhraseNoun: {
    label: "catchPhraseNoun",
    value: faker.company.catchPhraseNoun(),
    code: "faker.company.catchPhraseNoun()",
  },
  bsAdjective: {
    label: "bsAdjective",
    value: faker.company.bsAdjective(),
    code: "faker.company.bsAdjective()",
  },
  bsBuzz: {
    label: "bsBuzz",
    value: faker.company.bsBuzz(),
    code: "faker.company.bsBuzz()",
  },
  bsNoun: {
    label: "bsNoun",
    value: faker.company.bsNoun(),
    code: "faker.company.bsNoun()",
  },
});

// Database Data(label,value,code)
const database = reactive({
  column: {
    label: "column",
    value: faker.database.column(),
    code: "faker.database.column()",
  },
  type: {
    label: "type",
    value: faker.database.type(),
    code: "faker.database.type()",
  },
  collation: {
    label: "collation",
    value: faker.database.collation(),
    code: "faker.database.collation()",
  },
  engine: {
    label: "engine",
    value: faker.database.engine(),
    code: "faker.database.engine()",
  },
});

// Date Data(label,value,code)
const date = reactive({
  past: {
    label: "past",
    value: faker.date.past(),
    code: "faker.date.past()",
  },
  future: {
    label: "future",
    value: faker.date.future(),
    code: "faker.date.future()",
  },
  recent: {
    label: "recent",
    value: faker.date.recent(),
    code: "faker.date.recent()",
  },
  soon: {
    label: "soon",
    value: faker.date.soon(),
    code: "faker.date.soon()",
  },
  month: {
    label: "month",
    value: faker.date.month(),
    code: "faker.date.month()",
  },
  weekday: {
    label: "weekday",
    value: faker.date.weekday(),
    code: "faker.date.weekday()",
  },
});

// Finance Data(label,value,code)
const finance = reactive({
  account: {
    label: "account",
    value: faker.finance.account(),
    code: "faker.finance.account()",
  },
  accountName: {
    label: "accountName",
    value: faker.finance.accountName(),
    code: "faker.finance.accountName()",
  },
  mask: {
    label: "mask",
    value: faker.finance.mask(),
    code: "faker.finance.mask()",
  },
  amount: {
    label: "amount",
    value: faker.finance.amount(),
    code: "faker.finance.amount()",
  },
  transactionType: {
    label: "transactionType",
    value: faker.finance.transactionType(),
    code: "faker.finance.transactionType()",
  },
  currencyCode: {
    label: "currencyCode",
    value: faker.finance.currencyCode(),
    code: "faker.finance.currencyCode()",
  },
  currencyName: {
    label: "currencyName",
    value: faker.finance.currencyName(),
    code: "faker.finance.currencyName()",
  },
  currencySymbol: {
    label: "currencySymbol",
    value: faker.finance.currencySymbol(),
    code: "faker.finance.currencySymbol()",
  },
  bitcoinAddress: {
    label: "bitcoinAddress",
    value: faker.finance.bitcoinAddress(),
    code: "faker.finance.bitcoinAddress()",
  },
  ethereumAddress: {
    label: "ethereumAddress",
    value: faker.finance.ethereumAddress(),
    code: "faker.finance.ethereumAddress()",
  },
  iban: {
    label: "iban",
    value: faker.finance.iban(),
    code: "faker.finance.iban()",
  },
  bic: {
    label: "bic",
    value: faker.finance.bic(),
    code: "faker.finance.bic()",
  },
});

// Helpers Data(label,value,code)

const helpers = reactive({
  arrayElement: {
    label: "arrayElement",
    value: faker.helpers.arrayElement(),
    code: "faker.helpers.arrayElement()",
  },
  arrayElements: {
    label: "arrayElements",
    value: faker.helpers.arrayElements(),
    code: "faker.helpers.arrayElements()",
  },
});

// Hacker Data(label,value,code)
const hacker = reactive({
  abbreviation: {
    label: "abbreviation",
    value: faker.hacker.abbreviation(),
    code: "faker.hacker.abbreviation()",
  },
  adjective: {
    label: "adjective",
    value: faker.hacker.adjective(),
    code: "faker.hacker.adjective()",
  },
  noun: {
    label: "noun",
    value: faker.hacker.noun(),
    code: "faker.hacker.noun()",
  },
  verb: {
    label: "verb",
    value: faker.hacker.verb(),
    code: "faker.hacker.verb()",
  },
  ingverb: {
    label: "ingverb",
    value: faker.hacker.ingverb(),
    code: "faker.hacker.ingverb()",
  },
  phrase: {
    label: "phrase",
    value: faker.hacker.phrase(),
    code: "faker.hacker.phrase()",
  },
});

// Image Data(label,value,code)
const image = reactive({
  image: {
    label: "image",
    value: faker.image.image(),
    code: "faker.image.image()",
  },
  avatar: {
    label: "avatar",
    value: faker.image.avatar(),
    code: "faker.image.avatar()",
  },
  imageUrl: {
    label: "imageUrl",
    value: faker.image.imageUrl(),
    code: "faker.image.imageUrl()",
  },
  abstract: {
    label: "abstract",
    value: faker.image.abstract(),
    code: "faker.image.abstract()",
  },
  animals: {
    label: "animals",
    value: faker.image.animals(),
    code: "faker.image.animals()",
  },
  business: {
    label: "business",
    value: faker.image.business(),
    code: "faker.image.business()",
  },
  cats: {
    label: "cats",
    value: faker.image.cats(),
    code: "faker.image.cats()",
  },
  city: {
    label: "city",
    value: faker.image.city(),
    code: "faker.image.city()",
  },
  food: {
    label: "food",
    value: faker.image.food(),
    code: "faker.image.food()",
  },
  nightlife: {
    label: "nightlife",
    value: faker.image.nightlife(),
    code: "faker.image.nightlife()",
  },
  fashion: {
    label: "fashion",
    value: faker.image.fashion(),
    code: "faker.image.fashion()",
  },
  people: {
    label: "people",
    value: faker.image.people(),
    code: "faker.image.people()",
  },
  nature: {
    label: "nature",
    value: faker.image.nature(),
    code: "faker.image.nature()",
  },
  sports: {
    label: "sports",
    value: faker.image.sports(),
    code: "faker.image.sports()",
  },
  technics: {
    label: "technics",
    value: faker.image.technics(),
    code: "faker.image.technics()",
  },
  transport: {
    label: "transport",
    value: faker.image.transport(),
    code: "faker.image.transport()",
  },
  dataUri: {
    label: "dataUri",
    value: faker.image.dataUri(),
    code: "faker.image.dataUri()",
  },
});

// Internet Data(label,value,code)
const internet = reactive({
  avatar: {
    label: "avatar",
    value: faker.internet.avatar(),
    code: "faker.internet.avatar()",
  },
  email: {
    label: "email",
    value: faker.internet.email(),
    code: "faker.internet.email()",
  },
  exampleEmail: {
    label: "exampleEmail",
    value: faker.internet.exampleEmail(),
    code: "faker.internet.exampleEmail()",
  },
  userName: {
    label: "userName",
    value: faker.internet.userName(),
    code: "faker.internet.userName()",
  },
  protocol: {
    label: "protocol",
    value: faker.internet.protocol(),
    code: "faker.internet.protocol()",
  },
  url: {
    label: "url",
    value: faker.internet.url(),
    code: "faker.internet.url()",
  },
  domainName: {
    label: "domainName",
    value: faker.internet.domainName(),
    code: "faker.internet.domainName()",
  },
  domainSuffix: {
    label: "domainSuffix",
    value: faker.internet.domainSuffix(),
    code: "faker.internet.domainSuffix()",
  },
  domainWord: {
    label: "domainWord",
    value: faker.internet.domainWord(),
    code: "faker.internet.domainWord()",
  },
  ip: {
    label: "ip",
    value: faker.internet.ip(),
    code: "faker.internet.ip()",
  },
  ipv6: {
    label: "ipv6",
    value: faker.internet.ipv6(),
    code: "faker.internet.ipv6()",
  },
  userAgent: {
    label: "userAgent",
    value: faker.internet.userAgent(),
    code: "faker.internet.userAgent()",
  },
  color: {
    label: "color",
    value: faker.internet.color(),
    code: "faker.internet.color()",
  },
  mac: {
    label: "mac",
    value: faker.internet.mac(),
    code: "faker.internet.mac()",
  },
  password: {
    label: "password",
    value: faker.internet.password(),
    code: "faker.internet.password()",
  },
});

// Lorem Data(label,value,code)
const lorem = reactive({
  word: {
    label: "word",
    value: faker.lorem.word(),
    code: "faker.lorem.word()",
  },
  words: {
    label: "words",
    value: faker.lorem.words(),
    code: "faker.lorem.words()",
  },
  sentence: {
    label: "sentence",
    value: faker.lorem.sentence(),
    code: "faker.lorem.sentence()",
  },
  slug: {
    label: "slug",
    value: faker.lorem.slug(),
    code: "faker.lorem.slug()",
  },
  sentences: {
    label: "sentences",
    value: faker.lorem.sentences(),
    code: "faker.lorem.sentences()",
  },
  paragraph: {
    label: "paragraph",
    value: faker.lorem.paragraph(),
    code: "faker.lorem.paragraph()",
  },
  paragraphs: {
    label: "paragraphs",
    value: faker.lorem.paragraphs(),
    code: "faker.lorem.paragraphs()",
  },
  text: {
    label: "text",
    value: faker.lorem.text(),
    code: "faker.lorem.text()",
  },
  lines: {
    label: "lines",
    value: faker.lorem.lines(),
    code: "faker.lorem.lines()",
  },
});

// Git Data(label,value,code)
const git = reactive({
  branch: {
    label: "branch",
    value: faker.git.branch(),
    code: "faker.git.branch()",
  },
  commitEntry: {
    label: "commitEntry",
    value: faker.git.commitEntry(),
    code: "faker.git.commitEntry()",
  },
  commitMessage: {
    label: "commitMessage",
    value: faker.git.commitMessage(),
    code: "faker.git.commitMessage()",
  },
  commitSha: {
    label: "commitSha",
    value: faker.git.commitSha(),
    code: "faker.git.commitSha()",
  },
  shortSha: {
    label: "shortSha",
    value: faker.git.shortSha(),
    code: "faker.git.shortSha()",
  },
});

//

// Name Data(label,value,code)
// findName
// firstName
// fullName
// gender
// jobArea
// jobDescriptor
// jobTitle
// jobType
// lastName
// middleName
// prefix
// sex
// sexType
// suffix
const name = reactive({
  findName: {
    label: "findName",
    value: faker.name.findName(),
    code: "faker.name.findName()",
  },
  firstName: {
    label: "firstName",
    value: faker.name.firstName(),
    code: "faker.name.firstName()",
  },
});

// Phone Data(label,value,code)

const phone = reactive({
  imei: {
    label: "imei",
    value: faker.phone.imei(),
    code: "faker.phone.imei()",
  },
  number: {
    label: "number",
    value: faker.phone.number(),
    code: "faker.phone.number()",
  },
});

// System Data(label,value,code)

const system = reactive({
  fileName: {
    label: "fileName",
    value: faker.system.fileName(),
    code: "faker.system.fileName()",
  },
  commonFileName: {
    label: "commonFileName",
    value: faker.system.commonFileName(),
    code: "faker.system.commonFileName()",
  },
  commonFileType: {
    label: "commonFileType",
    value: faker.system.commonFileType(),
    code: "faker.system.commonFileType()",
  },
  commonFileExt: {
    label: "commonFileExt",
    value: faker.system.commonFileExt(),
    code: "faker.system.commonFileExt()",
  },
  fileType: {
    label: "fileType",
    value: faker.system.fileType(),
    code: "faker.system.fileType()",
  },
  fileExt: {
    label: "fileExt",
    value: faker.system.fileExt(),
    code: "faker.system.fileExt()",
  },
  directoryPath: {
    label: "directoryPath",
    value: faker.system.directoryPath(),
    code: "faker.system.directoryPath()",
  },
  filePath: {
    label: "filePath",
    value: faker.system.filePath(),
    code: "faker.system.filePath()",
  },
  semver: {
    label: "semver",
    value: faker.system.semver(),
    code: "faker.system.semver()",
  },
});
</script>

<template>
  <v-row>
    <!-- ---------------------------------------------- -->
    <!-- address Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          address
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in address" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ item.code }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- animal Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          animal
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in animal" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ item.code }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- commerce Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          commerce
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in commerce" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }}:</b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ `faker.commerce.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- color Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary"> color </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in color" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ `faker.color.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- company Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          company
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in company" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ `faker.company.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- database Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          database
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in database" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ `faker.database.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- date Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary"> date </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in date" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ `faker.date.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- finance Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          finance
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in finance" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ `faker.finance.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- git Card -->
    <!-- ---------------------------------------------- -->
    <!-- <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary"> git </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in git" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ `faker.git.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col> -->
    <!-- ---------------------------------------------- -->
    <!-- hacker Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          hacker
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in hacker" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill">{{ item.value }}</span
              ><b class="text-blue">{{ `faker.hacker.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- helpers Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          helpers
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in helpers" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill"> {{ item.value }} </span
              ><b class="text-blue">{{ `faker.helpers.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- image Card -->
    <!-- ---------------------------------------------- -->
    <!-- <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary"> image </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in image" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <div class="flex-fill">
                <img :src="item.value" :alt="item.label" />
              </div>
              <b class="text-blue">{{ `faker.image.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col> -->
    <!-- ---------------------------------------------- -->
    <!-- internet Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          internet
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in internet" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill"> {{ item.value }} </span
              ><b class="text-blue">{{ `faker.internet.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- lorem Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary"> lorem </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in lorem" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill"> {{ item.value }} </span
              ><b class="text-blue">{{ `faker.lorem.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- ---------------------------------------------- -->
    <!-- name Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary"> name </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in name" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill"> {{ item.value }} </span
              ><b class="text-blue">{{ `faker.name.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- phone Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary"> phone </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in phone" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill"> {{ item.value }} </span
              ><b class="text-blue">{{ `faker.phone.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- git Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary"> git </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in git" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill"> {{ item.value }} </span
              ><b class="text-blue">{{ `faker.git.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- stystem Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary">
          system
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(item, key) in system" :key="key">
            <div class="d-flex">
              <b class="mr-1">{{ item.label }} : </b>
              <span class="flex-fill"> {{ item.value }} </span
              ><b class="text-blue">{{ `faker.system.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- ---------------------------------------------- -->
    <!-- image Card -->
    <!-- ---------------------------------------------- -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title class="font-weight-bold bg-primary"> image </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="d-flex" v-for="(item, key) in image" :key="key">
            <div>
              <b class="mr-1">{{ item.label }} : </b>
              <div class="flex-fill">
                <v-img width="300" :src="item.value" :alt="item.label" />
              </div>

              <b class="text-blue">{{ `faker.image.${key}()` }}</b>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
