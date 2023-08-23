const presets = [
  {
    name: "Grammar Correction",
    description: "Convert ungrammatical statements into standard English.",
  },
  {
    name: "Summarize for a 2nd grader",
    description:
      "Simplify text to a level appropriate for a second-grade student.",
  },
  {
    name: "Parse unstructured data",
    description: "Create tables from unstructured text.",
  },
  {
    name: "Emoji Translation",
    description: "Translate regular text into emoji text.",
  },
  {
    name: "Calculate time complexity",
    description: "Find the time complexity of a function.",
  },
  {
    name: "Explain code",
    description: "Explain a complicated piece of code.",
  },
  {
    name: "Keyword extraction",
    description: "Extract keywords from a block of text.",
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

export { presets, models, textModels };
