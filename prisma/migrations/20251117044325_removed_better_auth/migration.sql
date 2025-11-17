-- CreateEnum
CREATE TYPE "public"."INTEGRATIONS" AS ENUM ('INSTAGRAM', 'WHATSAPP', 'FACEBOOK');

-- CreateEnum
CREATE TYPE "public"."SUBSCRIPTION_PLAN" AS ENUM ('PRO', 'FREE', 'ENTERPRISE');

-- CreateEnum
CREATE TYPE "public"."INSTAGRAM" AS ENUM ('INSTAGRAM');

-- CreateEnum
CREATE TYPE "public"."MEDIATYPE" AS ENUM ('IMAGE', 'VIDEO', 'CAROSEL_ALBUM');

-- CreateEnum
CREATE TYPE "public"."LISTENERS" AS ENUM ('SMARTAI', 'MESSAGE');

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subscription" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT,
    "plan" "public"."SUBSCRIPTION_PLAN" NOT NULL DEFAULT 'FREE',
    "customerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Automation" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL DEFAULT 'Untitled',
    "active" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Automation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Integrations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" "public"."INTEGRATIONS" NOT NULL DEFAULT 'INSTAGRAM',
    "userId" TEXT,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "instagramId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Integrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Dms" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "automationId" UUID,
    "senderId" TEXT,
    "receiver" TEXT,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Trigger" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" TEXT NOT NULL,
    "automationId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Listener" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "automationId" UUID NOT NULL,
    "listener" "public"."LISTENERS" NOT NULL DEFAULT 'MESSAGE',
    "prompt" TEXT NOT NULL,
    "commentReply" TEXT,
    "dmCount" INTEGER NOT NULL DEFAULT 0,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Listener_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Post" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "postId" TEXT NOT NULL,
    "caption" TEXT,
    "media" TEXT NOT NULL,
    "mediaType" "public"."MEDIATYPE" NOT NULL DEFAULT 'IMAGE',
    "automationId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Keyword" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "word" TEXT NOT NULL,
    "automationId" UUID,

    CONSTRAINT "Keyword_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_userId_key" ON "public"."Subscription"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_customerId_key" ON "public"."Subscription"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Integrations_token_key" ON "public"."Integrations"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Integrations_instagramId_key" ON "public"."Integrations"("instagramId");

-- CreateIndex
CREATE UNIQUE INDEX "Listener_automationId_key" ON "public"."Listener"("automationId");

-- CreateIndex
CREATE UNIQUE INDEX "Keyword_automationId_word_key" ON "public"."Keyword"("automationId", "word");

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Automation" ADD CONSTRAINT "Automation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Integrations" ADD CONSTRAINT "Integrations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Dms" ADD CONSTRAINT "Dms_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Trigger" ADD CONSTRAINT "Trigger_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Listener" ADD CONSTRAINT "Listener_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Keyword" ADD CONSTRAINT "Keyword_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "public"."Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
