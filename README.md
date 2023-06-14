```console
$ npm install --force

$ npm run typecheck

app/routes/_index.tsx:39:7 - error TS2322: Type 'Validator<{ subaction: Subaction.FOO; foo: string; } | { bar: string; subaction: Subaction.BAR; }>' is not assignable to type 'Validator<{ subaction: Subaction.FOO; foo: string; }>'.
  Type '{ subaction: Subaction.FOO; foo: string; } | { bar: string; subaction: Subaction.BAR; }' is not assignable to type '{ subaction: Subaction.FOO; foo: string; }'.
    Property 'foo' is missing in type '{ bar: string; subaction: Subaction.BAR; }' but required in type '{ subaction: Subaction.FOO; foo: string; }'.

39       validator={validator}
         ~~~~~~~~~

  app/routes/_index.tsx:33:59
    33   const handleSubmit = (data: { subaction: Subaction.FOO; foo: string }) => {
                                                                 ~~~
    'foo' is declared here.
  node_modules/remix-validated-form/dist/index.d.ts:183:5
    183     validator: Validator<DataType>;
            ~~~~~~~~~
    The expected type comes from property 'validator' which is declared here on type 'IntrinsicAttributes & { validator: Validator<{ subaction: Subaction.FOO; foo: string; }>; onSubmit?: ((data: { subaction: Subaction.FOO; foo: string; }, event: FormEvent<...>) => void | Promise<...>) | undefined; ... 5 more ...; disableFocusOnError?: boolean | undefined; } & Omit<...>'
```
