export interface Preset {
  id: string;
  name: string;
}

export const presets: Preset[] = [
  {
    id: "9cb0e66a-9937-465d-a188-2c4c4ae2401f",
    name: "Grammatical Standard English",
  },
  {
    id: "61eb0e32-2391-4cd3-adc3-66efe09bc0b7",
    name: "Summarize for a 2nd grader",
  },
  {
    id: "a4e1fa51-f4ce-4e45-892c-224030a00bdd",
    name: "Text to command",
  },
  {
    id: "cc198b13-4933-43aa-977e-dcd95fa30770",
    name: "Q&A",
  },
  {
    id: "adfa95be-a575-45fd-a9ef-ea45386c64de",
    name: "English to other languages",
  },
  {
    id: "c569a06a-0bd6-43a7-adf9-bf68c09e7a79",
    name: "Parse unstructured data",
  },
  {
    id: "15ccc0d7-f37a-4f0a-8163-a37e162877dc",
    name: "Classification",
  },
  {
    id: "4641ef41-1c0f-421d-b4b2-70fe431081f3",
    name: "Natural language to Python",
  },
  {
    id: "48d34082-72f3-4a1b-a14d-f15aca4f57a0",
    name: "Explain code",
  },
  {
    id: "dfd42fd5-0394-4810-92c6-cc907d3bfd1a",
    name: "Chat",
  },
];

const models = [
  {
    id: "gpt-3.5-turbo",
    name: "gpt-3.5-turbo",
    description:
      "Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration 2 weeks after it is released.",
    maxTokens: "4,096 tokens",
    trainingData: "Up to Sep 2021",
  },
  {
    id: "gpt-3.5-turbo-16k",
    name: "gpt-3.5-turbo-16k",
    description:
      "Same capabilities as the standard gpt-3.5-turbo model but with 4 times the context.	",
    maxTokens: "16,384 tokens",
    trainingData: "Up to Sep 2021",
  },
  {
    id: "gpt-3.5-turbo-0613",
    name: "gpt-3.5-turbo-0613",
    description:
      "Snapshot of gpt-3.5-turbo from June 13th 2023 with function calling data. Unlike gpt-3.5-turbo, this model will not receive updates, and will be deprecated 3 months after a new version is released.",
    maxTokens: "4,096 tokens",
    trainingData: "Up to Sep 2021",
  },
  {
    id: "gpt-3.5-turbo-16k-06",
    name: "gpt-3.5-turbo-16k-06",
    description:
      "Snapshot of gpt-3.5-turbo-16k from June 13th 2023. Unlike gpt-3.5-turbo-16k, this model will not receive updates, and will be deprecated 3 months after a new version is released.",
    maxTokens: "16,384 tokens",
    trainingData: "Up to Sep 2021",
  },
];

const textModels = [
  {
    id: "text-davinci-001",
    name: "text-davinci-001",
    description:
      "The most capable model. Completions generally make sense and are grammatically correct, but there can sometimes be issues with word repetition, sentence structure, and factual accuracy.",
    maxTokens: "2048 tokens",
    trainingData: "Up to Sep 2021",
  },
  {
    id: "text-curie-002",
    name: "text-curie-002",
    description:
      "A versatile, general-purpose language model. Good at making simple language translations, performing rudimentary reading comprehension, and answering simple questions.",
    maxTokens: "2048 tokens",
    trainingData: "Up to Sep 2021",
  },
  {
    id: "text-babbage-001",
    name: "text-babbage-001",
    description:
      "A language model trained on Wikipedia and a large-scale reddit dataset. Good for answering fact-based questions and summarizing long text.",
    maxTokens: "2048 tokens",
    trainingData: "Up to Sep 2021",
  },
  {
    id: "text-ada-003",
    name: "text-ada-003",
    description:
      "A scaled-down version of the davinci model. The ada model is slightly worse at generating text than other models but is much cheaper to use.",
    maxTokens: "1024 tokens",
    trainingData: "Up to Sep 2021",
  },
  {
    id: "text-curie-instruct",
    name: "text-curie-instruct",
    description:
      "A version of the curie model fine-tuned on a variety of tasks. This model is less coherent but more capable of following instructions than the base curie model.",
    maxTokens: "2048 tokens",
    trainingData: "Up to Sep 2021",
  },
];

export { models, textModels };
