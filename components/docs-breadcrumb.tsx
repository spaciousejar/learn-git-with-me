import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";
import { Fragment } from "react";

const pageHrefs = new Set(page_routes.map((route) => route.href));

export default function DocsBreadcrumb({ paths }: { paths: string[] }) {
  return (
    <div className="pb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/docs${page_routes[0].href}`}>Docs</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {paths.map((path, index) => {
            const routeHref = `/${paths.slice(0, index + 1).join("/")}`;
            const label = toTitleCase(path);
            return (
              <Fragment key={path}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {index === paths.length - 1 ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : pageHrefs.has(routeHref) ? (
                    <BreadcrumbLink asChild>
                      <Link href={`/docs${routeHref}`}>{label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <span className="font-normal text-muted-foreground">
                      {label}
                    </span>
                  )}
                </BreadcrumbItem>
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function toTitleCase(input: string): string {
  const words = input.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}
