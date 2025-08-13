import Link from "next/link";


export default function HomePage() {

  const routes = [
    {name: "Accord", path: "/accord"},
    {name: "Axios Demo", path:"/axios-demo"},
    {name:"Counter", path:"/counter"},
    {name: "Figma Form", path:"/figmaform"},
    {name:"Login", path: "/Login"},
  ];

  return (
    <main className="p-6 text-center space-y-7">
      <h1 className="text-2xl font-medium">My App Navigation</h1>
      <div className="flex gap-4 justify-center">
        {routes.map((route)=> (
          <Link key={route.path} href={route.path} className="text-blue-500 hover:underline"
          >
            {route.name}
          </Link>
        ))}
      </div>

    </main>
  );
}
