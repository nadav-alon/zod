import { z, ZodFormattedErrorSchema, ZodObject } from "./src";


const MySchema = z.string()
// z.object()
const parsed = MySchema.safeParse({hello:'hasdf', world:'not just digits'})

const x : ZodFormattedErrorSchema<string> = {
}


if (parsed.success) console.log('success');
else {
    const errorSchema = MySchema.errorFormatSchema()
    const result = errorSchema.safeParse(parsed.error.format())
    console.log(result);
}
