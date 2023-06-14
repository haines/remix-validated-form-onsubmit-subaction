import type { V2_MetaFunction } from "@remix-run/node";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { z } from "zod";
import { zfd } from "zod-form-data";

enum Subaction {
  FOO = "foo",
  BAR = "bar",
}

const validator = withZod(
  z.discriminatedUnion("subaction", [
    z.object({
      subaction: z.literal(Subaction.FOO),
      foo: zfd.text(),
    }),
    z.object({
      subaction: z.literal(Subaction.BAR),
      bar: zfd.text(),
    }),
  ])
);

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const handleSubmit = (data: { subaction: Subaction.FOO; foo: string }) => {
    console.info({ data });
  };

  return (
    <ValidatedForm
      validator={validator}
      subaction={Subaction.FOO}
      onSubmit={handleSubmit}
    >
      ...
    </ValidatedForm>
  );
}
