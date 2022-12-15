# Medicine Cabinet

#### A Capstone Project by Alexx Graham for BrainStation Web Development Bootcamp

##### Description:

Medicine Cabinet is an app designed to help individuals who struggle with chronic health conditions.
It's intention is to help those who struggle to remember when to take their medications, or why they take their medications.

## Features

- Add Medications
- Edit Medications
- Delete Medications
- Add Entries
- Edit Entries
- Delete Entries

## Run Locally

#### Clone the project

```bash
  git clone https://github.com/alexxgraham/capstone-project.git
```

### Each Directory Requires .env files, Please see the .env.template included in the repository

#### Go to the Back End directory

```bash
  cd capstone-api
```

#### Install dependencies

```bash
  npm install
```

#### Start the server

```bash
1. npm run migrate
2. npm run seed
  3. npm start
```

#### Go to the Front End directory

```bash
  cd ../capstone
```

#### Install dependencies

```bash
  npm install
```

#### Start the server

```bash
  npm start
```

#### Open http://127.0.0.1:PORT in your favorite browser!

#### Note: The Default Port is 3000 for Front End & 3030 for Back End

## Documentation

#### Also Available at http://127.0.0.1:PORT/index.html

### Endpoints

#### /medications

##### Lists all Medication Data

```bash
{
    "rx": "Acetaminophen",
    "generic": "Tylenol",
    "dosage": "325mg",
    "frequency": "As needed",
    "times": null,
    "quantity": 100,
    "use": "Pain Reliever",
    "why": "Relieve Pain or Reduce Fever",
    "description": "Acetaminophen is used to treat mild to moderate pain, moderate to severe pain in conjunction with opiates, or to reduce fever. Common conditions treated include headache, muscle aches, arthritis, backache, toothaches, sore throat, colds, flu, and fevers.",
    "side": "Stomach Pain (Upper Right Side), Loss of Appetite, Tiredness, Itching, Dark Urine, Clay-Colored Stools, or Jaundice",
    "serious": "Severe Skin Reaction, Ongoing Headache, Nausea, Vomiting, Redness, Swelling, if your symptoms get worse, or if you have any new symptoms",
    "major": 7,
    "moderate": 65,
    "minor": 35,
    "interactions": "https://www.drugs.com/drug-interactions/acetaminophen.html"
},
{
    "rx": "Amphetamine",
    "generic": "Adderall",
    "dosage": "5mg",
    "frequency": "Twice Daily",
    "times": "8:00,23:00",
    "quantity": 30,
    "use": "Central Nervous System Stimulant",
    "why": "Treat ADHD",
    "description": "Adderall is used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy. Adderall contains a combination of amphetamine and dextroamphetamine.",
    "side": "Stomach Pain, Loss of Appetite, Weight Loss, Mood Changes, Feeling Nervous, Fast Heart Rate, Headache, Dizziness, Sleep Problems, or Dry Mouth",
    "serious": "Chest Pain, Trouble Breathing, Hallucinations, Aggression, Hostility, Paranoia, Seizures, Tics (Muscle twitches), or Changes in your Vision",
    "major": 36,
    "moderate": 135,
    "minor": 9,
    "interactions": ["https://www.drugs.com/drug-interactions/amphetamine-dextroamphetamine,adderall.html"]
},...
```

#### /medications/:medRx

##### Returns a Single Medication by it's Rx Value

```bash
{
    "rx": "Melatonin",
    "generic": "Melatonin",
    "dosage": "5mg",
    "frequency": "Every night",
    "times": "21:30",
    "quantity": 60,
    "use": "Sedative",
    "why": "Sleep",
    "description": "Melatonin is the natural hormone your body secretes that helps to maintain your wake-sleep cycle (also called “biological clock”).",
    "side": "Drowsiness, Dizziness, Weakness, Confusion, Vivid Dreams, Headache, Loss of Appetite, Diarrhea, Nausea, Stomach Pain, or Joint or Back Pain",
    "serious": "Nightmares, Depression, Anxiety, Increased Irritability, Changes in Blood Pressure, or Seizures",
    "major": 0,
    "moderate": 282,
    "minor": 7,
    "interactions": "https://www.drugs.com/drug-interactions/melatonin.html"
}
```

#### /entries

##### Lists All Entry Data

```bash
{
    "date": "11-30-2022",
    "note": "Took Adderall,Took Melatonin,Took Adderall"
},
{
    "date": "12-1-2022",
    "note": "Took Adderall,Took Melatonin,Took Adderall"
},
{
    "date": "12-10-2022",
    "note": "Took Adderall,Took Melatonin,Took Adderall"
},
{
    "date": "12-11-2022",
    "note": "Took Adderall,Took Melatonin,Took Adderall"
},...
```

#### /entries/:date

##### Returns a Single Entry by it's Date Value

```bash
{
    "date": "12-6-2022",
    "note": "Took Adderall,Took Melatonin,Took Adderall"
}
```
