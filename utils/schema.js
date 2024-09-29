
import { text, varchar,serial } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInterview',{
   id:serial("id").primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobRole:varchar('jobRole').notNull(),
   //  jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
    mockId:varchar('mockid').notNull(),
   
})

export const UserAnswer=pgTable('UserAnswer',{
    id:serial("id").primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question'),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    Rating:varchar('Rating'),
    Feedback:text('Feedback'),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt'),
})