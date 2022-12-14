-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_id_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_id_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "slug",
DROP COLUMN "type",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Service";

