import { Container } from "../../components/Container";
import { Card, CardBody } from "../../components/ui/Card";

export default function Roadmap() {
  return (
    <main>
      <Container className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Roadmap</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Short-term polish, medium-term subsystem growth, and long-term experiments
          like SMP and stronger isolation.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <CardBody>
              <div className="text-base font-semibold text-white">Short-term</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>Polish boot-stage logs + error codes</li>
                <li>Stabilize shell commands + UI behavior</li>
                <li>Harden interrupt/exception paths</li>
                <li>Improve DHCP reliability + net diagnostics</li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="text-base font-semibold text-white">Medium-term</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>Minimal scheduler + task abstraction</li>
                <li>Expand filesystem (metadata, dirs, compaction)</li>
                <li>Improve browser toward real layout</li>
                <li>Harden HTTP streaming/caching primitives</li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="text-base font-semibold text-white">Long-term</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>RTOS-style scheduling experiments</li>
                <li>SMP bring-up + inter-CPU comms</li>
                <li>Higher-half kernel + stronger isolation</li>
                <li>Native TLS/crypto stack experiments</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </Container>
    </main>
  );
}
